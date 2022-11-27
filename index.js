const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// ---middlewares----
app.use(cors());
app.use(express.json());

// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD);


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7mc1um4.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const carsCollection = client.db('carData').collection('carsCollections');
        const carsCategory = client.db('carData').collection('category');

        app.get('/categories', async (req, res) => {
            const query = {}
            const cursor = carsCategory.find(query);
            const result = await cursor.toArray();
            res.send(result);
        });

        app.get('/categories/:id', async (req, res) => {
            const nid = parseInt(req.params.id);
            // console.log(nid);
            const query = { id: nid };
            const cursor = carsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        });
    }
    finally {

    }
}

run().catch(err => console.log(err));







app.get('/', (req, res) => {
    res.send('car api running');
});

app.listen(port, () => {
    console.log('car running on port', port);
})