

const { default: axios } = require('axios');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));


app.get('/',
	(req, res) => {
		res.sendFile(__dirname + './public/index.html');
	});

// app.post('/submit',(req, res) => {
// 		const { username,email,phoneno,address } = req.body;
// 		// res.send(
// 		// 	{
// 		// 		username,
//         //         email,phoneno,address,

// 		// 	});
// 		const userdata = {
// 			username,email,phoneno,address
// 		};
// 		axios.post('http://localhost:3000/user',userdata).then(data =>{
// 			res.send('success');
// 		}).catch(err=>{
// 			console.log(err);
// 		});

// 	});

app.post('/form', (req, res) => {
    const { username, email, phone, address } = req.body;
    const userdata={
        username,
        email,
        phone,
        address
    }
    
axios.post("http://localhost:3000/user",userdata).then(data=>{
    res.send("user data saved success")
}).catch(err=>console.log("error saving the data",err))
});


app.listen(4000,
	() => {
		console.log(
			'Our express server is up on port 3000'
		);
	});
