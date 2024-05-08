const mongoose = require('mongoose');

var skillSchema = new mongoose.Schema({
    skillName:String,
    experience:Number,
    proficiency:String
});

var jobSeekerSchema = new mongoose.Schema({
    jobSeekersName:String,
    emailId:String,
    age:Number,
    certified:Boolean,
    skills:[skillSchema]
});

var js=mongoose.model('jobSeeker',jobSeekerSchema);
mongoose.connect('mongodb://localhost:27017/photos');

var jobSeeker1 = new js({
    jobSeekersName:"Raj",
    emailId:"raj@gmail.com",
    age:22,
    certified:true,
    skills:[{skillName:"java",experience:1,proficiency:"beginner"}]
})

jobSeeker1.save();