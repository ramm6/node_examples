const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    return collection.insertOne(document);
};

exports.findDocuments = (db, collection, callback) => {
    return collection.find({}).toArray();
};

exports.updateDocument = (db, document, update, collection, callback) => {
    return collection.updateOne(document, {$set : update}, null);
};

exports.deleteDocument = (db, document, collection, callback) => {
    return collection.deleteOne(document);
};