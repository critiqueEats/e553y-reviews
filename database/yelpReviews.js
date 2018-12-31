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
    }

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
    photos: [String],
    language: {type: String, default: 'English'},
    useful: [String],
    funny: [String],
    cool: [String],
    ownerResponse:{
        type: String, 
        default: 'null'
    }

});




const Summary = mongoose.model('Summary', SummarySchema);
const Review = mongoose.model('Review', ReviewSchema);

const getSummaryByRestaurantId = function(restaurantId, callback) {
    Summary.findOne({restaurantId})
        .catch(error => callback(error))
        .then(docs => callback(null, docs));
};

const getReviewsByRestaurantId = function(restaurantId, callback, sortBy = '') {
    const allowedSort = ['', 'date', '-date', 'stars', '-stars', 'elites'];
    
    if(sortBy && !allowedSort.includes(sortBy)) {
        return callback(new Error("Invalid sort criteria: " + sortBy));
    }
    //when elite sort option is selected
    if(sortBy === 'elites') {
        return Review.find({
            $and: [
                {restaurantId},
                {
                    'user.elite': {$ne: 'false'}
                }
            ]
        }).sort('-date')
        .catch(error => callback(error))
        .then(docs => callback(null, docs))
    }
    //to exclude empty sortBy
    if(sortBy) {
        return Review.find({restaurantId}).sort(sortBy)
                .catch(error => callback(error))
                .then(docs => callback(null, docs))    
    }

    Review.find({restaurantId})
        .catch(error => callback(error))
        .then(docs => callback(null, docs))
}

const searchReviewsByRestaurantId = function(restaurantId, query, callback) {
    Review.find({
        $and: [
            {restaurantId},
            {
                text: {$regex: query, $options: 'i'} 
            }
        ]
    }).catch(error => callback(error))
      .then(docs => callback(null, docs))
}

const addReview = function(restaurantId, {name, text, stars}, callback) {
    let review = new Review({
        restaurantId: restaurantId,
        user: {name: name, elite: "'18"},
        language: 'English',
        text: text,
        stars: stars,
    });
    review.save(function(error, doc) {
        if(error) {
            return callback(error);
        }

        callback(null, doc);

    })
}

module.exports = {
   getSummaryByRestaurantId,
   getReviewsByRestaurantId,
   searchReviewsByRestaurantId,
   addReview,
   Summary,
   Review
}

