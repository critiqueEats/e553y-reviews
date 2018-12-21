const db = require('./yelpReviews');
const faker = require('Faker');


seedReviews = function(count) {
   let reviewsArr = [];
   while(count--) {
    let user = {};
    user.name = faker.Name.firstName() + ' ' + faker.Name.lastName()[0] + '.',
    user.photo = faker.Image.avatar(60, 60);
    user.city = faker.Address.city();
    user.reviewCount = Math.trunc(Math.random() * 500);
    user.photoCount = Math.trunc(Math.random() * 5);
    user.elite = [false, false,"'18", "'17", "'16", "'15", "'14"][Math.trunc(Math.random() * 4)];
    
    let reviewObj = {
        user: user,
        restaurantId: Math.trunc(Math.random() * 100),
        date: faker.Date.past(100),
        text: [faker.Lorem.sentences(), faker.Lorem.paragraph(),faker.Lorem.paragraphs()][Math.trunc(Math.random() * 3)],
        useful: [],
        funny: [],
        cool: [],
        language: ["English", "English", "German", "Spanish"][Math.trunc(Math.random() * 4)],
        ownerResponse: [null, null, null, faker.Lorem.paragraph()][Math.trunc(Math.random() * 4)],
    };

    let max = Math.trunc(Math.random() * 5);
    while(max --) {
        reviewObj.useful.push(faker.Name.firstName() + ' ' + faker.Name.lastName()[0] + '.');
    }
     max = Math.trunc(Math.random() * 5);
    while(max --) {
        reviewObj.cool.push(faker.Name.firstName() + ' ' + faker.Name.lastName()[0] + '.');
    }
     max = Math.trunc(Math.random() * 5);
    while(max --) {
        reviewObj.funny.push(faker.Name.firstName() + ' ' + faker.Name.lastName()[0] + '.');
    }
    reviewsArr.push(reviewObj);
   }
   db.Review.create(reviewsArr);
   
}
seedReviews(1000);

seedSummary = function() {
    let restaurantCount = 100;
    let summaries = [];
    while(restaurantCount--) {
        let summary = {};
        summary.restaurantId = restaurantCount;

        let five = Math.trunc(Math.random() * 100);
        let four = Math.trunc(Math.random() * 100);
        let three = Math.trunc(Math.random() * 100);
        let two = Math.trunc(Math.random() * 100);
        let one = Math.trunc(Math.random() * 100);

        let count = five + four + three + two + one; 
        let average = (five * 5 + four * 4 + three * 3 + two * 2 + one) / count;     
        
        summary.five = five;
        summary.four = four;
        summary.three = three; 
        summary.two = two;
        summary.one = one;
        summary.count = count;
        summary.average = average;

        summaries.push(summary);
    }
    db.Summary.create(summaries);
}

seedSummary();




