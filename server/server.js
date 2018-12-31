const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const models = require('../database/yelpReviews');
const template = require('./templates/index');


const app = express();

//setup logging
app.use(morgan('dev'));

//setup bodyParser
app.use(bodyParser.json());

app.use('/', express.static('client/dist'));

//get all reviews for restaurant by id
app.get('/:restaurantId/reviews', (req, res) => {
    let restaurantId = req.params.restaurantId;
    const sortBy = req.query.sortBy;
    models.getReviewsByRestaurantId(restaurantId, function(err, docs) {
        if(err) {
            return res.status(500).json({error: "server error"});
        }
        res.status(201);
        res.json(docs);
    }, sortBy);
});

//get summary for restaurant by id
app.get('/:restaurantId/summary', (req, res) => {
    let restaurantId = req.params.restaurantId;
    models.getSummaryByRestaurantId(restaurantId, function(err, docs) {
        if(err) {
            return res.status(500).json({error: "server error"});
        }
        res.status(201);
        res.json(docs);
    });
})

//search reviews by restaurantId
app.post('/:restaurantId/search', (req, res) => {
    let restaurantId = req.params.restaurantId;
    let query = req.body.query;
    models.searchReviewsByRestaurantId(restaurantId,query, function(err, docs) {
        if(err) {
            return res.status(500).json({error: "server error"});
        }
        res.status(200);
        res.json(docs);
    })
})

//add a new review for restaurant by id
app.post('/:restaurantId/reviews', (req, res) => {
    let restaurantId = req.params.restaurantId;
    let reviewObj = req.body;
    
    models.addReview(restaurantId,reviewObj, function(err, docs) {
        if(err) {
            return res.status(500).json({error: "server error"});
        }
        res.status(201);
        res.json(docs);
    });
});

//add endpoint for seving dynamic html
app.get('/reviews/:restaurantId', (req, res) => {
    let restaurantId = req.params.restaurantId;
    res.status(200);
    res.send(template(restaurantId));    
});

let port = 5002;
const server = app.listen(port, ()=> console.log('Server running on port: ' + server.address().port));


