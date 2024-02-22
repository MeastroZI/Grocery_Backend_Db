const { getConnection } = require("./get_Connections");
const {Authenticate} = require ("./authenticate")
const client = getConnection ()

const DB = client.db("Main")
const collection = DB.collection('Orders')




async function creatorder (Detail) { 
    const data = await Authenticate (Detail)
    const userid = data.data._id
    const res = await addOrder(userid , Detail.item)  

    return res

} 


async function addOrder (userId , item) { 
    let result
    const data = {
        userid : userId,
        item : item
        
    }

    try {
        result = await collection.insertOne(data)
    }catch(err) { 
        console.log(err)
    }
    // console.log(result)
    return true
}

async function showorders (detail) {
    //getting the userId
    let result
    const data = await Authenticate (detail)
    console.log(data.data._id)
    try { 
        result = await collection.find({userid : data.data._id}).toArray()
    } catch (err) { 
        console.log(err)
    }

    // console.log(result)
    // const arra= await result.toArray()
    return result

}




module.exports = { creatorder : creatorder , showorders: showorders}
