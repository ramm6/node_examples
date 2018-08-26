'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comments = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required : true
    },
    comment: {
        type: String,
        required:true
    },
    author: {
        type: String,
        required:true
    }
}, {
    timestamps:true
});

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique : true
    },
    description: {
        type: String,
        required : true
    },
    comments:[comments]
}, {
    timestamps : true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;