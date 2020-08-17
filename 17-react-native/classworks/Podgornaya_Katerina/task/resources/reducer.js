import { combineReducers } from 'redux';
import character from './character/character.reducer';

const reducers = {
  character,
};

export default combineReducers(reducers);