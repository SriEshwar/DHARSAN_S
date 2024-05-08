const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
const indexRoute = require('./routes/index');
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const homeRoute = require('./routes/home')
app.use('/', indexRoute);
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/home',homeRoute);



mongoose.connect('mongodb://localhost:27017/sampleData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});