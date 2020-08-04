import {SET_FAVOURITE} from './types';

const initialState = {
  favourites: [],
};

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVOURITE:
      return [...state, action.payload]
    default:
      return state;

  }
}
