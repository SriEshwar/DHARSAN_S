// const fs = require('fs');

// fs.readFile('input.text','utf8',(err,data)=>{
//     if (err){
//         console.log('Error reading input')
//     }
//     else{
//         console.log(data)
//     }
// })
// const express = require('express');
// const path = require('path');
// const app = express();
// const xlsx = require('xlsx');
// const fs = require('fs');
// var bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // app.use(express.static(path.join(__dirname,'public')));

// const users = [];
// app.get('/register',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./public/form.html'))
// })

// app.post('/register',(req,res)=>{
//     const {name, rollNo , dep ,mobile} = req.body;

//     if (!name || !rollNo || !dep || !mobile){
//         return res.status(404).json({message:"all the fields are required"});
//     }

//     const exsistingUser = users.find(user => user.rollno === rollNo);

//     if (exsistingUser){
//         return res.status(404).json({message:"already user is exsisting with this rollno"});
//     }
//     const newUser = {name, rollNo , dep ,mobile}

//     users.push(newUser)

//     const wb = xlsx.utils.book_new();
//     const ws = xlsx.utils.json_to_sheet(users);

//     xlsx.utils.book_append_sheet(wb, ws, 'Users');

//     xlsx.writeFile(wb, 'users.xlsx');


//     res.status(200).json({message:'user details is added sucessfully'})
// })


const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/home',(req,res)=>{
    res.render('home');
})


app.listen(3000,()=>{
    console.log('http://localhost:3000');
})