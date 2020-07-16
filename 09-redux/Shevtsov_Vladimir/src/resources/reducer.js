import { combineReducers } from 'redux';
import auth from './auth/auth.reducer';

const reducers = {
  auth,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
