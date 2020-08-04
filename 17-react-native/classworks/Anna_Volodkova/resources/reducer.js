import {combineReducers} from 'redux';

import {favouriteReducer} from './favourites.reducer';


const rootReducer = combineReducers({
    favouriteCharacters: favouriteReducer,
  }
);

export default rootReducer;
