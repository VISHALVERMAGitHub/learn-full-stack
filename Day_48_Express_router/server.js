const express =require("express");
//07 cookies parser
const cookieparser = require("cookie-parser");

const app= express();
const users=require("./routes/user.js")
const posts=require("./routes/post.js")

// app.use(cookieparser()); use this when if not use {signed : true} 
app.use(cookieparser("secretcode"));

//08 signed cookies
app.get("/getsignedcookies",(req,res)=>{
    res.cookie("madeIn","India",{signed:true})// by signed is true means if any changes is madeIn ki value then this line give {madeIn:false}
    res.send("signed cookie sent");
})
app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verified");
    
})


app.get("/getcookies",(req,res)=>{
    res.cookie("greet","namaste");
    res.cookie("orgin","Bharat");
    res.send("we sent you a cookies");
})
app.get("/", (req,res)=>{
    console.dir(req.cookies);
    
    res.send("i am root");
    
})
app.get("/greet",(req,res)=>{
    let {name="anomynus"}=req.cookies;

    res.send(`hi,${name}`);
})




//user routes
app.use("/users",users)
//post routes
app.use("/posts",posts)




app.listen(3000,()=>{
    console.log(`server listen on port 3000`)
})

