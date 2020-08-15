import { combineReducers } from 'redux';
import post from './post/post.reducer';
import phrase from './phrase/phrase.reducer';
import subreddit from './subreddit/subreddit.reducer';

const reducers = {
  post,
  phrase,
  subreddit,
};

export default combineReducers(reducers);
