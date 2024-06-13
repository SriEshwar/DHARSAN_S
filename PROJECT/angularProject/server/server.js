const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/angular-data', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.post('/api/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
        ...req.body,
        password: hashedPassword
    });
    const savedUser = await newUser.save();
    res.status(200).json({ message: 'User added successfully!', user: savedUser });
   }
    catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
          return res.status(400).json({ error: 'User not found' });
      }
      const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
      if (!isPasswordValid) {
          return res.status(400).json({ error: 'Invalid password' });
      }
      res.status(200).json({ message: 'Login successful', user: { name: user.name, email: user.email } });
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});