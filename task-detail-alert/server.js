

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));


app.get('/',
	(req, res) => {
		res.sendFile(__dirname + './public/index.html');
	});

app.post('/',
	(req, res) => {
		const { username,email,phoneno,address } = req.body;
		res.send(
			{
				username,
                email,phoneno,address,

			});
	});

app.listen(3000,
	() => {
		console.log(
			'Our express server is up on port 3000'
		);
	});
