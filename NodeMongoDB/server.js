const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const operations = require('./operations');

var server = 'mongodb://testuser:password@ds133558.mlab.com:33558/testapp';
const dbname = 'testapp';

mongoClient.connect(server, (err, client) => {
    
    assert.equal(err, null);

    console.log('Connected to server successfully.');
    const db = client.db(dbname);
    const collection = db.collection('dishes');

    operations.insertDocument(db, { "name": "rammohan", "description": "testing from coursera method." }, collection,
        (result) => {

            assert.equal(err, null);
            console.log('After insert');
            console.log(result.ops);

            operations.findDocuments(db, collection, (docs) => {
                console.log('Found: \n');
                console.log(docs);
                operations.updateDocument(db, { name: "rammohan" },
                    { "education": "graduate" }, collection, (result) => {
                        console.log("Updated document :", result.result);
                    operations.findDocuments(db, collection, (docs) => {
                        console.log("Found documents : \n", docs);
                        db.dropCollection('dishes', (res) => {
                            client.close();
                        });
                    });
                });
            });

        });
});