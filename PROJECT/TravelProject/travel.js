
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 4000; 
const bodyParser = require('body-parser');
const mysql = require('mysql2');

app.use(express.static('public'));
app.use(bodyParser.json());


function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

function sendOTP(email, otp) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dharsan1553@gmail.com',
            pass: 'your_password' 
        }
    });

    const mailOptions = {
        from: 'dharsan1553@gmail.com',
        to: email,
        subject: 'OTP for Signup Verification',
        text: `Your OTP is ${otp}.`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/views/index.html'));
});


app.get('/desinations',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/views/desinations.html'))
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/views/home.html'))
})

app.post('/signup', (req, res) => {

    const { name, email } = req.body;

    const otp = generateOTP();

    sendOTP(email, otp);

    res.json({ message: "OTP sent to your email" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
