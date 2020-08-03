import { combineReducers } from 'redux';

import subreddit from './subreddit/subreddit.reducer';

const rootReducer = combineReducers({
  subreddit,
});

export default rootReducer;
