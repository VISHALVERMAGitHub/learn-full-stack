const mongoose = require('mongoose');

main().then( ()=>{
    console.log("connected to MongoDB DataBase");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

// schema
const userSchema = new mongoose.Schema({
  usernamme:String,
  addresses:[
    {
      location:String,
      city:String,
    }
  ],
})

// model
const User =mongoose.models("User",userSchema);
