const getConnections = require("./DbOperations/get_Connections") 
const fs = require('fs')
const path = require("path")
const express = require('express')
const app = express ()
const port = 3000
const userRouter = require("./Routers/User_oprs")


app.use('/user' , userRouter)
app.get('/' , (req , res)=>{
    res.send("hello gois this is home page")
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})


