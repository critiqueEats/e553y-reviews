const proxyquire = require('proxyquire'); /* needed to stub-out the internal dependencies of the Unit Under Test */

describe('Helper functions', () => {
    
    // use 'test' database for testing to prevent "real" database interference
    let db;
    let configMock = {
        uri: 'mongodb://localhost:3002',
        options: {
            dbName:'test'
        }
    }
    beforeAll(()=> {
        db = proxyquire('../database/yelpReviews', {'config': configMock}); 
        // empty collections before all tests to prevent  subsequent test runs from
        // interfering with eachother
        return  db.Summary.remove({}).then(() => 
        db.Review.remove({}));
    });


    test('"addReview" should add reviews to database', (done) => {
        expect.assertions(1);
        db.addReview(1, {name: 'john k.', stars: 5, text: 'this is great'}, () => {
            db.Review.find().then(docs => {
                expect(docs[0].text).toBe('this is great');
                done();
            })
        })
    });

    test('"getReviewsByRestaurantId" should retrieve all reviews by restaurant ID', (done) => {
        expect.assertions(1);
        db.Review.insertMany([{
            restaurantId: 55, 
            user: {name: 'John S.'},
            stars: 5,
            text: '55 serves great burritos'
        },{
            restaurantId: 55, 
            user: {name: 'Jack T.'},
            stars: 1,
            text: 'my toilet is going to hate me tonight'            
        }], () => {

            db.getReviewsByRestaurantId(55, (err, docs) => {
                expect(docs).toHaveLength(2);
                done();
            })
        })
    })

    test('"getSummaryByRestaurantId" should retrieve review summary by restaurant ID', (done) => {
        expect.assertions(1);
        //add a summary to database
        let summaryDoc = new db.Summary({
            restaurantId: 33,
            average: 2.5,
            count: 100,
        });

        //check the doc exists
        summaryDoc.save().then(()=> {
           db.getSummaryByRestaurantId(33,(err, doc) => {
               expect(doc.count).toBe(100);
               done()
           });
        })
    });

    test('"searchReviewsByRestaurantId should find reviews by search-term', (done) => {
        expect.assertions(2);
        db.searchReviewsByRestaurantId(55, 'toilet', (err, docs) => {
            expect(docs).toHaveLength(1);
            expect(docs[0].user.name).toBe('Jack T.');
            done();
        })
    })
});

