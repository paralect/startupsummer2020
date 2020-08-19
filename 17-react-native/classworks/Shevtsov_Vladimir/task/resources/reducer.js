import { combineReducers } from 'redux';
import { marvel } from './marvel.reducer';

const reducers = {
  marvel,
};

const combinedReducer = combineReducers({
  ...reducers,
});

export default combinedReducer;
