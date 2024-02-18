const creatConnection = require("./creat_Connection").creatConnection


let connections = { 
    connection : null
}
function getConnection(){
    if ( connections.connection != null) { 
        return connections.connection
    }
    else  {
        connections.connection = creatConnection()
        return connections.connection
    }


}

module.exports = {getConnection}