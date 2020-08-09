import { combineReducers } from 'redux';

import marvel from './characters/characters.reducer';

const rootReducer = combineReducers({
  marvel,
});

export default rootReducer;
