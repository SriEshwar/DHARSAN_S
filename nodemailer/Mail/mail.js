const express = require('express');
const nodeMailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

const sender = nodeMailer.createTransport({
    service : 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'));
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
            res.status(500).send('Failed to send email');
        }else{
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email send successfully');
        }
    });
});

app.listen(7000,()=>{
    console.log(`Server is running on http://localhost:7000`);
});