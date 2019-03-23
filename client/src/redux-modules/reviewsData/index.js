import types from './types.js';

const initialState = {
  reviewsByLanguage: {
    English: []
  },
  languages : ['English'],
  languages_count: ['English (0)'],
  selectedLanguage: 0,
  sortOptions: [
    "Lorem Yelpsum Sort", 
    "Newest First",
    "Older First",
    "Highest Rated", 
    "Lowest Rated", 
    "Elites"
  ],
  selectedSort: 0,
}

const catagorizeReviews = function(reviews) {

  const reviewsByLanguage = {English: []};
  const languages = ['English'];
  
  reviews.forEach(review => {
      let {language} = review;
      if(!reviewsByLanguage[language]) {
          languages.push(language);                
          reviewsByLanguage[language] = [];
      }

      reviewsByLanguage[language].push(review);
  });
  //display review-count for each language
  const languages_count = languages.map(language => (
      `${language} (${reviewsByLanguage[language].length})`
      )
  )
  
  return {
    languages,
    languages_count,
    reviewsByLanguage,
  }
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.REVIEWS_UPDATE:
      return Object.assign(
        {},
        state, 
        catagorizeReviews(action.reviews), 
        {
          //reset the sort selection
          selectedSort: 0, 
          selectedLanguage: action.selectedLanguage
        })

    case types.REVIEWS_SET_LANGUAGE:
      return Object.assign({},state, { selectedLanguage: action.selectedLanguage })
    
    default: 
      return state;   
  }
};
