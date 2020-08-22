import {
  FETCH_CHARACTER_COMICS_SUCCESS,
  FETCH_CHARACTERS_SUCCESS,
  TOGGLE_CHARACTER_FAVOURITE
} from './marvel.actions';

const initState = {
  characters: [],
};

export const marvel = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_SUCCESS:
      return { ...state, characters: action.payload };
    case TOGGLE_CHARACTER_FAVOURITE:
      return {
        ...state,
        characters: state.characters.map((char) =>
          char.id === action.payload.id ? { ...char, favourite: !char.favourite } : char),
      };
    case FETCH_CHARACTER_COMICS_SUCCESS:
      return {
        ...state,
        characters: state.characters.map((char) =>
          char.id === action.payload.id ? { ...char, comicsDetails: action.payload.data } : char),
      };
    default: return state;
  }
};
