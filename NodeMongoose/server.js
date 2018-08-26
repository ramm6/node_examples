'use strict';
var mongoose = require('mongoose');
var Dishes = require('./models/Dishes');

var dbUrl = 'mongodb://testuser:password@ds133558.mlab.com:33558/testapp';
const conn = mongoose.connect(dbUrl);

conn.then((db) => {
    console.log('Connected to mongoose server..');
    var newDish = Dishes({
        name: "Uthappizza",
        description: "Its not at all good taste"
    });

    newDish.save()
        .then((dish) => {
            console.log('New Dish saved.');
            return Dishes.find({});
        })
        .then((dishes) => {
            console.log(dishes.length + ' Dishes found in server');
            //return Dishes.remove({});
        })
        .then(() => {
            return mongoose.connection.close(conn);
        })
        .catch((err) => {
            console.log('Error Occured : ' + err.message);
        });
})
