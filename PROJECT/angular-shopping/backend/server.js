// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://localhost:27017/ShoppingDetails';

app.use(cors());
app.use(express.json());
jwtToken = 'chdc12@5d7acyeT6GHab3'

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// User model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});
// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const User = mongoose.model('User', userSchema);

//product model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 0 },
  ratings: [{ userId: mongoose.Schema.Types.ObjectId, rating: Number }],
  reviews: [{ userId: mongoose.Schema.Types.ObjectId, review: String }],
  category: String,
  description: String,
  specification: String,
  highlight: String,
});

const Product = mongoose.model('Product', productSchema);

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true }
    }
  ],
  deliveryDate: { type: Date, required: true }
});
const Order = mongoose.model('Order', orderSchema);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Refresh token route
app.post('/api/refresh-token', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).send('Token missing');
  }

  try {
    const decoded = jwt.verify(token, 'jwtToken', { ignoreExpiration: true });
    const newToken = jwt.sign({ id: decoded.id }, 'jwtToken', { expiresIn: '1h' });
    res.json({ token: newToken });
  } catch (err) {
    console.error('Error refreshing token', err);
    res.status(500).send('Server error');
  }
});

// Signup route
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, 'jwtToken', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, 'jwtToken', { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).send('Server error');
  }
});



// Add product
app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    const { name, price, category, description, specification, highlight } = req.body;
    const image = req.file.path;

    const newProduct = new Product({
      name,
      price,
      category,
      image,
      description,
      specification,
      highlight
    });
    await newProduct.save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


// Get products
app.get('/api/products', async (req, res) => {
  try {
    const { search, category } = req.query;
    const query = {};

    if (search) {
      query.name = { $regex: search, $options: 'i' }; // Case-insensitive search
    }

    if (category) {
      query.category = category;
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


// Get user profile
app.get('/api/profile', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.error('Authorization header missing');
      return res.status(401).send('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      console.error('Token missing');
      return res.status(401).send('Token missing');
    }

    let decoded;
    try {
      decoded = jwt.verify(token, 'jwtToken');
    } catch (err) {
      console.error('Invalid token', err);
      return res.status(401).send('Invalid token');
    }

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      console.error('User not found');
      return res.status(404).send('User not found');
    }

    res.json(user);
  } catch (err) {
    console.error('Server error', err);
    res.status(500).send('Server error');
  }
});

// Get product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).send('Server error');
  }
});
// Rate a product
app.post('/api/products/:id/rate', async (req, res) => {
  try {
    const { rating, userId } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }

    const existingRating = product.ratings.find(r => r.userId.toString() === userId);
    if (existingRating) {
      return res.status(400).send('User has already rated this product');
    }

    product.ratings.push({ userId, rating });
    product.rating = calculateAverageRating(product.ratings);
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Submit a review
app.post('/api/products/:id/review', async (req, res) => {
  try {
    const { review, userId } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }

    const existingReview = product.reviews.find(r => r.userId.toString() === userId);
    if (existingReview) {
      return res.status(400).send('User has already reviewed this product');
    }

    product.reviews.push({ userId, review });
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Helper function to calculate average rating
function calculateAverageRating(ratings) {
  if (ratings.length === 0) return 0;
  const sum = ratings.reduce((acc, curr) => acc + curr.rating, 0);
  return sum / ratings.length;
}


// Save order
app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


// Get orders by user ID
app.get('/api/orders/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
      .populate({
        path: 'products.productId',
        model: 'Product'
      });
    res.json(orders);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


// Delete order
app.delete('/api/orders/:orderId', async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).send('Order not found');
    }

    const today = new Date();
    const deliveryDate = new Date(order.deliveryDate);
    const diffDays = (deliveryDate.getTime() - today.getTime()) / (1000 * 3600 * 24);

    if (diffDays > 2) {
      await order.remove();
      res.status(200).send('Order deleted');
    } else {
      res.status(400).send('Cannot cancel the order within 2 days of delivery');
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});