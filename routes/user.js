const express = require ("express")
const Authenticate = require("../DbOperations/Authenticate").Authenticate

const router = express.Router()

router.post('/login', (req, res) => {
    // console.log(req.body)
    const userData = req.body.data
    const isAuthorized = Authenticate(userData)

    Authenticate(userData).then((data)=>{
        if (data) {
            res.send("you are authorized")
        }
        if (!data) {
            res.send("you are not authorized")
        }
    })
})

router.get('/signup' , (req , res) => {
    res.send('Sign up')
})

module.exports = router
