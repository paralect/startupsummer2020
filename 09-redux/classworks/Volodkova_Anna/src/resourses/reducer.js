import {combineReducers} from 'redux';

import {searchValueReducer} from './searchValueReducer';
import {reactSubredditsReducer} from './reactSubredditsReducer'

const rootReducer = combineReducers({
  input: searchValueReducer,
  posts: reactSubredditsReducer
  }
);

export default rootReducer;
