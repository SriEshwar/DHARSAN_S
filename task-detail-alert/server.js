const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.post('/submit', (req, res) => {
    console.log(req.body);
    const { name, phone, email, address } = req.body;
    const message = `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Address: ${address}
    `;

    res.send(message);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
