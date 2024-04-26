const express = require('express');
const nodeMailer = require('nodemailer');
const path = require('path');
require('dotenv').config();


const app = express();
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static('public'));

const sender = nodeMailer.createTransport({
    service : 'gmail',
    port : 587,
    secure:false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/views/index.html'));
});

app.post('/send-email',(req,res)=>{
    const {to, subject, body} = req.body;
    const inforamtion = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        html: body
    };
    sender.sendMail(inforamtion,(error,info)=>{
        if (error){
            console.error('Error sending email:', error);
            res.status(500).send('Failed to send email');
        }else{
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email send successfully');
        }
    })
});


app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`);
});