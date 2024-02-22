const getConnections = require("./get_Connections").getConnection

const client = getConnections()
const DB = client.db("Main")
const collection = DB.collection('Mearn_Prj')

async function Authenticate(Detail) {
    const uname = Detail.username
    const document = await getUserData(uname)
    // console.log(document)
    if (document) {

        if (document.password.trim() === Detail.password.trim()) {
            return {exist : true , data : document}
        }

        if (document.password.trim() != Detail.password.trim()) {
            return {exist : false}
        }
    }
    else {
        return {exist : false}
    }
}

async function getUserData(Uname) {
    let document
    // console.log(Uname)
    try {
        document = await collection.findOne({ "username": Uname })
    } catch (err) {
        console.error("Bhi error aa raha he ", err)
    }
    // console.log(document)
    return document
}

module.exports = {
    Authenticate :Authenticate
}
