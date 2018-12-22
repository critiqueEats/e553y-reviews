const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const models = require('../database/yelpReviews');


const app = express();

//setup logging
app.use(morgan('dev'));

//setup bodyParser
app.use(bodyParser.json());

//get all reviews for restaurant by id
app.get('/:restaurantId/reviews', (req, res) => {
    let restaurantId = req.params.restaurantId;
    models.getReviewsByRestaurantId(restaurantId, function(err, docs) {
        if(err) {
            return res.status(500).json(JSON.stringify({error: "server error"}));
        }
        res.status(201);
        res.json(JSON.stringify(docs));
    });
});

//get summary for restaurant by id
app.get('/:restaurantId/summary', (req, res) => {
    let restaurantId = req.params.restaurantId;
    models.getSummaryByRestaurantId(restaurantId, function(err, docs) {
        if(err) {
            return res.status(500).json(JSON.stringify({error: "server error"}));
        }
        res.status(201);
        res.json(JSON.stringify(docs));
    });
})

//add a new review for restaurant by id
app.post('/:restaurantId/reviews', (req, res) => {
    let restaurantId = req.params.restaurantId;
    let reviewObj = req.body.review;
    
    models.addReview(restaurantId,reviewObj, function(err, docs) {
        if(err) {
            return res.status(500).json(JSON.stringify({error: "server error"}));
        }
        res.status(201);
        res.json(JSON.stringify(docs));
    });
});

let port = 5002;
const server = app.listen(port, ()=> console.log('Server running on port: ' + server.address().port));


