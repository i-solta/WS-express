//1.import express
const express=require("express")
//2.Associate the express methods to a variable
const app=express()

//route
// app.get("/",(req,res)=>{
//     res.send("home page")
// })

// app.get("/about",(req,res)=>{
//     res.send("about page")
// })

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+"/public/index.html")
// })

// app.get("/css/style.css",(req,res)=>{
//     res.sendFile(__dirname+"/public/css/style.css" )
// })
// app.get("/css/style2.css",(req,res)=>{
//     res.sendFile(__dirname+"/public/css/style.css" )
// })


// routes
app.use("/api/users",require("./routes/api/users"))




//3.create a variable Port
const port=5001
//4.listen to the port
app.listen(port,err=>{
    err?console.log('err') :console.log(`server is running on port ${port}`)
})