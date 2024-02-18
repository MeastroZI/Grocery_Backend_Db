const fs = require('fs')
const path = require("path")
const { MongoClient, ServerApiVersion } = require('mongodb')
const express = require('express')


/*************************DB Connection********************* */

const app = express()
const uri= process.env.DB_URI

function creatConnection () { 
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



module.exports={creatConnection}
