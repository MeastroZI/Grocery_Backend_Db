const express = require ("express")
const Authenticate = require("../middleware/authenticate").Authenticate
const insertUser = require("../services/user/new_user").insertUser

const router = express.Router()

router.post('/login', (req, res) => {
    const userData = req.body.data

    Authenticate(userData).then((data)=>{
        if (data) {
            res.send("you are authorized")
        }
        if (!data) {
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

module.exports = router
