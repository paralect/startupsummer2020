import { combineReducers } from 'redux';
import post from './post/post.reducer';
import phrase from './phrase/phrase.reducer';

const reducers = {
  post,
  phrase,
};

export default combineReducers(reducers);
