const express = require("express");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const mongo_url = "mongodb://127.0.0.1:27017";
const app = express();
var cors = require('cors')
const port = 4000;
app.use(express.json());
app.use(cors())

let db;




app.get("/hello", function (req, res) {
    db.collection("rightPath").find()
        .toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        })
})






















MongoClient.connect(mongo_url, (err, client) => {
    console.log("Mongodb is connected");
    if (err) console.log("err while connecting");
    db = client.db("Fake")

    app.listen(port, () => console.log("server is running on the port", port));
})






