const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var server = 'mongodb://testuser:password@ds133558.mlab.com:33558/testapp';
const dbname = 'testapp';

mongoClient.connect(server, (err, client) => {
    
    assert.equal(err, null);

    console.log('Connected to server successfully.');
    const db = client.db(dbname);
    const collection = db.collection('collection');

    collection.insertOne({ "name": "rammohan", "description": "testing from coursera method." },
        (err, result) => {

            assert.equal(err, null);
            console.log('After insert');
            console.log(result.ops);

            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                console.log('Found: \n');
                console.log(docs);
                db.dropCollection('collection', (err, res) => {
                    assert.equal(err, null);
                    client.close();
                });
                
            });

        });
});