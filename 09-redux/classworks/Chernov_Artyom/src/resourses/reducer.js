import { combineReducers } from 'redux';

import searchResults from './search-results/search-results.reducer';
import subreddits from './subreddits/subreddits.reducer';

const reducers = {
  searchResults,
  subreddits,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;