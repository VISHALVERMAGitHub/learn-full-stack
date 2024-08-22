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
      _id:false,
      location:String,
      city:String,
    }
  ],
})

// model
const User =mongoose.model("User",userSchema);

// add user
const addUser =async ()=>{
  let user1 =new User({
    usernamme:"sherlockholmes",
    addresses:[{
      
      location:"221b beker street",
      city:"londan",
    }]
  });
  user1.addresses.push({location:"p32 wallstreet",city:"londan"});

  let result =await user1.save();
  console.log(result);

}

addUser();