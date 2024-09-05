const express =require("express");

const app= express();
const users=require("./routes/user.js")
const posts=require("./routes/post.js")
//day 49 
const session = require('express-session');



//02 express session 
// app.use(session({secret:"mysupersecretstring"}));
// app.get("/test",(req,res)=>{
//     res.send("test successful !");
// })

//03 express session middleware with 

// app.use(session({secret:"mysupersecretstring",resave:false,saveUninitialized:true,}));
// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count=1
//     }
//     res.send(`you sent a request ${req.session.count} times`);
// })

//04 storing  & using  session store info
const sessionOption={secret:"mysupersecretstring",resave:false,saveUninitialized:true,};
app.use(session(sessionOption));

app.get("/register",(req,res)=>{
    let {name = "anomynous"}=req.query;
    // console.log(req.session);
    req.session.name=name;  //req.session.name is variable which is store name  we can use any where.
    // console.log(req.session.name);
    
    // res.send(name);
    res.redirect("/hello")
})

app.get("/hello",(req,res)=>{
    res.send(`Hello ${req.session.name}`); //here use "req.session.name" is variable
})

app.listen(3000,()=>{
    console.log(`server listen on port 3000`)
})



// //07 cookies parser
// const cookieparser = require("cookie-parser");

// // app.use(cookieparser()); use this when if not use {signed : true} 
// app.use(cookieparser("secretcode"));

// //08 signed cookies
// app.get("/getsignedcookies",(req,res)=>{
//     res.cookie("madeIn","India",{signed:true})// by signed is true means if any changes is madeIn ki value then this line give {madeIn:false}
//     res.send("signed cookie sent");
// })
// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
    
// })


// app.get("/getcookies",(req,res)=>{
//     res.cookie("greet","namaste");
//     res.cookie("orgin","Bharat");
//     res.send("we sent you a cookies");
// })
// app.get("/", (req,res)=>{
//     console.dir(req.cookies);
    
//     res.send("i am root");
    
// })
// app.get("/greet",(req,res)=>{
//     let {name="anomynus"}=req.cookies;

//     res.send(`hi,${name}`);
// })




// //user routes
// app.use("/users",users)
// //post routes
// app.use("/posts",posts)


