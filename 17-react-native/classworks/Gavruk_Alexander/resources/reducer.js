import { combineReducers } from 'redux';

import characters from './characters/characters.reducer';

const rootReducer = combineReducers({
  characters,
});

export default rootReducer;
