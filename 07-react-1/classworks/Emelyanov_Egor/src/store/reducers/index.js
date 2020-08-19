import { combineReducers } from 'redux';

import input from './input';
import subredditData from './subredditData';

export default combineReducers({
  input,
  subredditData,
});

