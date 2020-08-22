import { combineReducers } from 'redux';
import subreddit from './subreddit';
import search from './search';

export default combineReducers({
  subreddit,
  search
})