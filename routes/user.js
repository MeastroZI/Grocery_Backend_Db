const express = require ("express")
const Authenticate = require("../services/db/authenticate").Authenticate
const insertUser = require("../services/user/new_user").insertUser
const  creatorder  = require("../services/db/Order").creatorder
const  showorders  = require("../services/db/Order").showorders

const router = express.Router()

router.post('/login', (req, res) => {
    const userData = req.body.data

    Authenticate(userData).then((data)=>{
        console.log(data)
        if (data.exist) {
            res.send("you are authorized")
        }
        if (!data.exist) {
            res.send("you are not authorized")
        }
    })
})

router.post('/signup' , (req , res)=>{
    const data = req.body.data
    console.log(data)
    insertUser(data).then((ret)=>{
        if (ret){
            res.send("signup succesfully")
        }
        else {
            res.send("Something is wrong")
        }
    })
})




router.post('/order' , (req , res)=>{
    const data = req.body.data
    console.log(data)
    creatorder(data).then((data)=>{
        console.log(data)
        res.send(data)
    })
})


router.post('/showorders' , (req , res)=>{
    const data = req.body.data
    console.log(data)
    showorders(data).then((result)=>{
        console.log(result)
        res.json(result)
    })
    
})

module.exports = router
