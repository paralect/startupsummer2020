import { combineReducers } from 'redux';

import subreddit from './subreddit/subreddit.reducer';

const reducers = {
  subreddit,
};

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
