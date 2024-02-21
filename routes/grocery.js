const express = require ("express")
const {getGcData} = require("../services/db/getgcdata")
// const Authenticate = require("../middleware/authenticate").Authenticate
// const insertUser = require("../services/user/new_user").insertUser

const router = express.Router()



router.get('/' , (req,  res)=>{
    res.send("grocerys is working")
})
router.get('/getgcdata' , (req , res)=>{
    obj = {}
   
    if ( req.query.item){
        obj.item = req.query.item
    }
    if ( req.query.type){
        obj.type = req.query.type
    }
    num = req.query.num?parseInt(req.query.num) : 5

    // console.log(obj)
    // console.log(typeof(num))
    getGcData(obj , num).then((data)=>{
        console.log(typeof(data))
        console.log(data)
        res.json(data)

    })
    
    // res.set('Content-Type' , 'application/json')




}) 


module.exports = router