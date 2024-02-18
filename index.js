// const getConnections = require("./DbOperations/get_Connections") 
require('dotenv').config();
const fs = require('fs')
const path = require("path")
const express = require('express')
const app = express ()
const port = process.env.PORT
const userRouter = require("./Routers/User_oprs")

app.use(express.json());
app.use('/user' , userRouter)
app.use('/DataDb' ,express.static("./DataDb") )
app.get('/' , (req , res)=>{
    res.send("hello gois this is home page")
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})


