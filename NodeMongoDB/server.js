const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const operations = require('./operations');

var server = 'mongodb://testuser:password@ds133558.mlab.com:33558/testapp';
const dbname = 'testapp';

mongoClient.connect(server).then((client) => {
    
    console.log('Connected to server successfully.');
    const db = client.db(dbname);
    const collection = db.collection('dishes');

    //Callback hell is implemented.

    operations.insertDocument(db, { "name": "rammohan1", "description": "testing from coursera method." }, collection)
        .then((result) => {
            console.log('Inserted document : \n' + JSON.stringify(result.ops) + '\n');
            return operations.findDocuments(db, collection);
        })
        .then((docs) => {
            console.log('Found: \n' + JSON.stringify(docs) + '\n');
            return operations.updateDocument(db, { "name": "rammohan1" },
                    { "education": "graduate" }, collection);
        })
        .then((result) => {
            console.log("Updated document :", JSON.stringify(result.result) + '\n');
            return operations.findDocuments(db, collection);
        })
        .then((docs) => {
            console.log("Found documents : \n", JSON.stringify(docs));
            return db.dropCollection('dishes');
        })
        .then((res) => {
            client.close();
        })
        .catch((error) => {
            console.log("Error : " + error)
        });
    })
    .catch((error) => { 
        console.log("Error : " + error)
     });
