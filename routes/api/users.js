const express=require("express")
let users =require("../../Data")

const router=express.Router()

//get all users
router.get('/',(req,res)=>{
    res.send(users)
})
//add new user 
router.post("/addUser",(req,res)=>{
    const newUser={
        ...req.body,id:Math.random()
    }
    
    users.push(newUser)
    res.json({msg:"user added",users})
})

//edit user
router.put("/:index",(req,res)=>{
    const ind=req.params.index
    const userToEdit=users.find(user=> user.id==ind ) 
    if(!userToEdit){
        return res.status(401).json({msg:"user not found"})
    }
    let editedUser={...userToEdit,...req.body}
     users=users.map(user=> user.id==ind? editedUser  : user)
    res.json({msg:"user edited",users})

})

module.exports=router
