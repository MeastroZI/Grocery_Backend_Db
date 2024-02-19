const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

/*************************DB Connection********************* */

const uri = process.env.MONGODB_URL

function createConnection () { 
    const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
    );
    async function run() {
        try {
            // Connect the client to the server (optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } catch (err) { 
            console.log(err)
        }
    }
    run().catch(console.dir);

    return client
}

module.exports = {createConnection: createConnection}
