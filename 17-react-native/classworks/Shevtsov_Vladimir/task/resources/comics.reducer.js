import { uniqBy } from 'lodash';
import {
  FETCH_COMICS_START,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_ERROR,
  ADD_CHARACTER_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from './comics.action';

const initState = {
  favorites: [],
  fetching: false,
  error: null,
}

export const comics = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COMICS_START:
      return { ...state, fetching: true };
    case FETCH_COMICS_SUCCESS:
      return { ...state, data: action.payload, fetching: false };
    case FETCH_COMICS_ERROR:
      return { ...state, error: action.payload, fetching: false };
    case ADD_CHARACTER_TO_FAVORITES:
      return { ...state, favorites: uniqBy([...state.favorites, action.payload], 'id') };
    case REMOVE_FROM_FAVORITES:
      return { ...state, favorites: state.favorites.filter((c) => c.id !== action.payload) };
    default: return state;
  }
}
