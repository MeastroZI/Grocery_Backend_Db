const express = require ("express")
const Authenticate = require("../services/db/authenticate").Authenticate
const insertUser = require("../services/user/new_user").insertUser
const  creatorder  = require("../services/db/creatOrder").creatorder

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
            res.send("data inserted succfully")
        }
        else {
            res.send("Something is wrong")
        }
    })
})




router.post('/order' , (req , res)=>{
    const data = req.body.data
    // const itemID = req.body.ID 
    // const userName  = req.body.username 
    // const password = req.body.password 
    console.log(data)
    creatorder(data)




})

module.exports = router
