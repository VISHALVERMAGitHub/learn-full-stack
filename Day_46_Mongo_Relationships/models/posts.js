const mongoose = require('mongoose');

main().then( ()=>{
    console.log("connected to MongoDB DataBase");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

// user schema
const userSchema = new mongoose.Schema({
  username:String,
  email:String,
})
//user model
const UserPost =mongoose.model("UserPost",userSchema);
// post Schema
const postSchema = new mongoose.Schema({
    content :String,
    likes:Number,
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref:"UserPost",
    }

})


const Post =mongoose.model("Post",postSchema);
/*
const addData =async ()=>{
    // let user1= new UserPost({
    //     username:"rahulkumar",
    //     email:"rahul@gmail.com",
    // })
    let user=await UserPost.findOne({username:"rahulkumar"});
    let post1 = new Post({
        content : "bye bye",
        likse:20,
        
    });

    // post1.user =user1 ;
    // await user1.save();
    post1.user=user;
    await post1.save();


}
addData()

*/

let getData =async ()=>{
    let res = await Post.find().populate("user","username");
    console.log(res);
}

getData();

