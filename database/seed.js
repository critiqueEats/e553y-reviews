const db = require('./yelpReviews');
const faker = require('Faker');


seedReviews = function(count) {
   let reviewsArr = [];
   while(count--) {
    let user = {};
    user.name = faker.Name.firstName() + ' ' + faker.Name.lastName()[0] + '.',
    user.photo = `https://s3.amazonaws.com/lorem-yelpsum-photos/avatars/images+(${faker.random.number(72)}).jpg`;
    user.city = faker.Address.city();
    user.friendCount = faker.random.number(150);
    user.reviewCount = Math.trunc(Math.random() * 500);
    user.photoCount = Math.trunc(Math.random() * 5);
    user.elite = [false, false, false, false, "'18", "'17", "'16", "'15", "'14"][Math.trunc(Math.random() * 9)];
    
    let reviewObj = {
        user: user,
        restaurantId: Math.trunc(Math.random() * 100),
        stars: faker.random.number(4) + 1,
        date: faker.Date.past(100),
        text: [faker.Lorem.paragraph(), faker.Lorem.paragraphs(),faker.Lorem.paragraphs()][Math.trunc(Math.random() * 3)],
        photos: new Array(faker.random.number(4)).fill(0).map(()=> `https://s3.amazonaws.com/lorem-yelpsum-photos/food/images+(${faker.random.number(52)}).jpg`),
        useful: new Array(faker.random.number(2)).fill(0).map(()=> faker.Name.firstName() + ' ' + faker.Name.lastName()[0] + '.'),
        funny: new Array(faker.random.number(2)).fill(0).map(()=> faker.Name.firstName() + ' ' + faker.Name.lastName()[0] + '.'),
        cool: new Array(faker.random.number(2)).fill(0).map(()=> faker.Name.firstName() + ' ' + faker.Name.lastName()[0] + '.'),
        language: ["English", "English", "English", "Spanish"][Math.trunc(Math.random() * 4)],
        ownerResponse: [null, null, null, faker.Lorem.paragraph()][Math.trunc(Math.random() * 4)],
    };
    

    reviewsArr.push(reviewObj);
}
//delete all documents if they exist
   db.Review.remove({},function(err) {
       if(err) {return console.log(err)};

       db.Review.create(reviewsArr);
   });
   
}
seedReviews(1000);

seedSummary = function() {
    let restaurantCount = 100;
    let summaries = [];
    while(restaurantCount--) {
        let summary = {};
        summary.restaurantId = restaurantCount;
        
        let five = Math.trunc(Math.random() * 500);
        let four = Math.trunc(Math.random() * 100);
        let three = Math.trunc(Math.random() * 50);
        let two = Math.trunc(Math.random() * 50);
        let one = Math.trunc(Math.random() * 50);
        
        let count = five + four + three + two + one; 
        let average = (five * 5 + four * 4 + three * 3 + two * 2 + one) / count;     
        
        let stars = {};
        stars.five = five;
        stars.four = four;
        stars.three = three; 
        stars.two = two;
        stars.one = one;
        
        summary.count = count;
        summary.average = average;
        summary.stars = stars;
        
        summaries.push(summary);
    }
    //remove all docs if any exist
    db.Summary.remove({}, function(err) {
        if(err) {return console.log(err)};
        
        db.Summary.create(summaries);
    })
}

seedSummary();




