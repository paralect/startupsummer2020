import { combineReducers } from 'redux';
import post from './post/post.reducer';

const reducers = {
  post,
};

export default combineReducers(reducers);
