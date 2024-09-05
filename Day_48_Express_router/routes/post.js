const express =require("express");
const router =express.Router()

//post
router.get("/", (req,res)=>{
    res.send("get posts");
    
})
router.get("/new",(req,res)=>{
    res.send("get new post form");
    
})
router.get("/:id", (req,res)=>{
    res.send("get show post");
    
})




router.post("/", (req,res)=>{
    res.send("get post user");
    
})

router.delete("/:id", (req,res)=>{
    res.send("delete post");
    
})

module.exports=router