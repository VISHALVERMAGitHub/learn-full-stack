const express =require("express");
const router =express.Router()


router.get("/", (req ,res)=>{
    res.send("get users ");
    
})
router.get("/new",(req,res)=>{
    res.send("get new user form");
    
})
router.get("/:id", (req,res)=>{
    res.send("get show user");
    
})


// post-user
router.post("/", (req,res)=>{
    res.send("get post user");
    
})
//delete-user
router.delete("/:id", (req,res)=>{
    res.send("delete user");
    
})

module.exports=router