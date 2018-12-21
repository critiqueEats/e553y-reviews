const mongoose = require('mongoose');
const config = require('./config');
const connection = mongoose.connect(config.uri, config.options);

const SummarySchema =  new mongoose.Schema({
    restaurantId: {type:Number, unique: true},
    average: Number,
    count: Number,
    stars: {
        five: Number,
        four: Number,
        three: Number,
        two: Number,
        one: Number,
    },
    history: [{
        year: String,
        average: Number,
    }],

});

const ReviewSchema = new mongoose.Schema({
    restaurantId: Number,
    user:{
        name: String,
        photo: String,
        city: String,
        friendCount: Number,
        reviewCount: Number,
        photoCount: Number,
        elite: String
    },
    stars: Number,
    date: {type: Date, default: Date.now},
    text: String,
    language: {type: String, default: 'English'},
    userful: [{
        username: String,
    }],
    funny: [{
        username: String,
    }],
    cool: [{
        username: String,
    }],
    ownerResponse:{
        type: String, 
        default: 'null'
    }

});

const Summary = mongoose.model('Summary', SummarySchema);
const Review = mongoose.model('Review', ReviewSchema);


module.exports = {
   
}