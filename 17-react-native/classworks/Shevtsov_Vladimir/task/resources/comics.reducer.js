import { uniqBy } from 'lodash';
import {
  FETCH_COMICS_START,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_ERROR,
  ADD_CHARACTER_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_CHARACTERS_ERROR,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_START,
} from './comics.action';

const initState = {
  favorites: [],
  fetching: false,
  error: null,
};

export const comics = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COMICS_START:
      return { ...state, fetching: true };
    case FETCH_COMICS_ERROR:
      return { ...state, error: action.payload };
    case FETCH_COMICS_SUCCESS: {
      const char = state.characters.find((c) => c.id === payload.characterId);
      char.comics = payload.data;
      console.log(payload.data);
      const chars = [...state.characters.filter((c) => c.id !== payload.characterId), char];
      return {
        ...state,
        characters: chars,
        fetching: false
      };
    }
    case FETCH_COMICS_ERROR:
      return { ...state, error: action.payload, fetching: false };
    case ADD_CHARACTER_TO_FAVORITES:
      return { ...state, favorites: uniqBy([...state.favorites, action.payload], 'id') };
    case REMOVE_FROM_FAVORITES:
      return { ...state, favorites: state.favorites.filter((c) => c.id !== action.payload) };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: uniqBy(action.payload, "id").map((obj) => (
          {
            id: obj.id,
            name: obj.name,
            thumbnail: `${obj.thumbnail.path}.${obj.thumbnail.extension}`,
            description: obj.description,
            comics: obj.comics,
          }
        )),
      };
    default: return state;
  }
};
