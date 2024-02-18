const express = require ("express")
const Authenticate = require("../DbOperations/Authenticate").Authenticate

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


router.get('/SiginUp' , (req , res)=>{
    //calling the newuser function 
})


module.exports = router