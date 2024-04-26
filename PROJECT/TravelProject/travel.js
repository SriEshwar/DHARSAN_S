
const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000; 
const bodyParser = require('body-parser');
const mysql = require('mysql2');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/views/index.html'));
});


app.get('/desinations',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/views/desinations.html'))
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/views/home.html'))
})




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
