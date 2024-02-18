const express = require ("express")
const Authenticate = require("../DbOperations/Authenticate").Authenticate
const insertUser = require("../DbOperations/New_user").insertUser
const router = express.Router()


router.post('/login' , (req , res)=>{
    // console.log(req.body)
    const userData = req.body.data

    const isAutherize = Authenticate(userData)

    Authenticate(userData).then((data)=>{
        if (data) {
            res.send("you are autherze")
        }
       
        if ( !data) {
            res.send("you are not autherize")
        }
        
    })
})


router.post('/signup' , (req , res)=>{
    const data = req.body.data
    console.log(data)
    insertUser(data).then((ret)=>{
        if (ret){
            res.send("data inserted succfully")
        }
        else {
            res.send("Something is wrong")
        }
    })
})


module.exports = router