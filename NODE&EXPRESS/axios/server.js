const express = require('express');
const bodyParser = require('body-parser');

const axios=require('axios');
const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



app.post('/submit', (req, res) => {
    const { username, password, mobile, email } = req.body;
    const userdata={
        username,
        password,
        mobile,
        email
    }
    
axios.post("http://localhost:3000/users",userdata).then(data=>{
    res.send("user data saved success")
}).catch(err=>console.log("error saving the data",err))
});
//axios.post().then().catch()

app.get("/getuser",(req,res)=>{

    axios.get("http://localhost:3000/users").then(dbresponse=>{
        res.json(dbresponse.data)
    }).catch(err=>{
        console.log(err)
    })
})


// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});