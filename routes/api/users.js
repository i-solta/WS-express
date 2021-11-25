const express=require("express")
let users =require("../../Data")

const router=express.Router()

//get all users
router.get('/',(req,res)=>{
    res.send(users)
})
module.exports=router
