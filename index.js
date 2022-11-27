const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// ---middlewares----
app.use(cors());
app.use(express.json());










app.get('/', (req, res) => {
    res.send('car api running');
});

app.listen(port, () => {
    console.log('car running on port', port);
})