const getConnection = require("../db/get_Connections").getConnection
const client = getConnection()

const Db = client.db('Main')
const coll = Db.collection('Mearn_Prj')

async function insertUser(Detail) {
    if (Detail )  {
        let result
        try { 
            result = await coll.insertOne(Detail)
        }catch (err) { 
            console.log(err)
        }
        console.log(result)
        if (result.acknowledged) {
            
            return true
        }
    }
    
    return false
}

module.exports={insertUser}
