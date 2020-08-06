import { combineReducers } from 'redux';
import { comics } from './comics.reducer';

const reducers = {
  comics,
};

const combinedReducer = combineReducers({
  ...reducers,
});

export default combinedReducer;
