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
  sortOptionIdx: 0,
  searchedTerm: null,
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
        catagorizeReviews(action.reviews)
      );
    
    case types.REVIEWS_SORT_SET:
        const {sortOptionIdx} = action;
        return Object.assign(
          {},
          state,
          {sortOptionIdx}
        );

    case types.REVIEWS_SET_LANGUAGE:
      const {selectedLanguage} = action;
      return Object.assign(
        {},
        state, 
        { selectedLanguage }
      );
    
    case types.REVIEWS_SEARCHEDTERM_SET:
        const {searchedTerm} = action;
        return Object.assign(
          {},
          state,
          {searchedTerm}
        )
    
    case types.REVIEWS_SEARCHEDTERM_CLEAR:
        return Object.assign(
          {},
          state,
          {searchedTerm: null}
        )

    default: 
      return state;   
  }
};
