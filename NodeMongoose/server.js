'use strict';
var mongoose = require('mongoose');
var Dishes = require('./models/Dishes');

var dbUrl = 'mongodb://testuser:password@ds133558.mlab.com:33558/testapp';
const conn = mongoose.connect(dbUrl);

conn.then((db) => {
        console.log('Connected to mongoose server..');
    Dishes.create({
        name: "Uthappizzaa",
        description: "Its not at all good taste"
    })
    .then((dish) => {
        console.log(dish);
        return Dishes.findByIdAndUpdate(dish._id, {
            $set: {
                description : "Updated test description"
            }
        },{
            new : true
        })
        .exec();
    })
    .then((dish) => {
        console.log(dish);
        dish.comments.push({
            rating: 5,
            comment: "Test comment",
            author: 'Rammohana rao B'
        });
        return dish.save();
    })
    .then((dish) => {
        console.log(dish);
        return db.collection('dishes').drop();
    })
    .then(() => {
        return db.close();
    })
    .catch((err) => {
        console.log('Error Occured : ' + err.message);
    });
})
