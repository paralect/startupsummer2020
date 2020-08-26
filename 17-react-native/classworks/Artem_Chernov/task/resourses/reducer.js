import { combineReducers } from 'redux';
import marvel from './marvel/marvel.reducer';

const reducers = {
  marvel,
};

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;