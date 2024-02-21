const { getConnection } = require("./get_Connections");
const {Authenticate} = require ("./authenticate")
const client = getConnection ()

const DB = client.db("Main")
const collection = DB.collection('Orders')




async function creatorder (Detail) { 
    const data = await Authenticate (Detail)
    const res  =addOrder(data._id , Detail.itemId)
    
    
} 


async function addOrder (userId , itemId) { 
    const data = {
        userid : userId,
        itemid : itemId
        
    }

    try {
        const result = await collection.insertOne(data)
    }catch(err) { 
        console.log(err)
    }
    console.log(result)
    return true
}

module.exports = { creatorder}
