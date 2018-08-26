const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    //const coll = db.collection(collection);
    collection.insert(document, (err, result) => {
        assert.equal(err, null);
        console.log('Inserted ' + result.result.n + ' documents into collection ' + collection);
        callback(result);
    });
};

exports.findDocuments = (db, collection, callback) => {
    //const coll = db.collection(collection);
    collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        callback(docs);
    })
};

exports.updateDocument = (db, document, update, collection, callback) => {
    //const coll = db.collection(collection);
    collection.updateOne(document, { $set: update }, null, (err, result) => {
        assert.equal(err, null);
        callback(result);
    });
};

exports.deleteDocument = (db, document, collection, callback) => {
    //const coll = db.collection(collection);
    collection.deleteOne(document, (err, result) => {
        console.log('Deleted document :', document);
        callback(result);
    });
};