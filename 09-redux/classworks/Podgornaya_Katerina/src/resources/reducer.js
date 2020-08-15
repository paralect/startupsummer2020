import { combineReducers } from 'redux';
import post from './post/post.reducer';
import phrase from './phrase/phrase.reducer';
import subreddit from './subreddit/subreddit.reducer';
import search from './search/search.reducer';

const reducers = {
  post,
  phrase,
  subreddit,
  search,
};

export default combineReducers(reducers);
