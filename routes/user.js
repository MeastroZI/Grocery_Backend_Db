const express = require('express')
const router = express.Router()

router.get('/login' , (req , res) => {
    res.send('Login');
})

router.get('/signup' , (req , res) => {
    res.send('Sign up');
})

module.exports = router
