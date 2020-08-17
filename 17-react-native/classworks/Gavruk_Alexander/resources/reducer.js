import { combineReducers } from 'redux';

import characterReducer from './characters/characters.reducer';
import comicsReducer from './comics/comics.reducer';

const rootReducer = combineReducers({
  characterReducer,
  comicsReducer
});

export default rootReducer;
