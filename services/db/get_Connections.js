const createConnection = require("./create_Connection").createConnection

let connections = {
    connection : null
}

function getConnection(){
    if (connections.connection != null) { 
        return connections.connection
    }
    else {
        connections.connection = createConnection()
        return connections.connection
    }
}

module.exports = {getConnection}
