const { getConnection } = require("./get_Connections");

const client = getConnection()
const DB = client.db('Main')
const coll = DB.collection('Web_Data')

async function getGcData(param ) { 
    let result
    
    
    try { 
        result = await coll.find({...param }).limit(num).toArray()
    }
    catch (err) {
        console.log(err)
    }

    result.forEach(elm => {
        elm.image_uri = process.env.HOST + elm.image_uri
    });
    console.log(result)
}




module.exports = {getGcData : getGcData}


