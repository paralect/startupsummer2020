import { SET_CHARACTERS, SET_FAVOURITE_CHARACTER, SET_ADDITIONAL_CHARACTER_INFO } from './characters.actions';

const initialState = {
  list: [],
};

export default function characters(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CHARACTERS:
      return { ...state, list: payload };
    case SET_FAVOURITE_CHARACTER:
      return { ...state, list: state.list.map(character => character.id !== payload
        ? character
        : {
          ...character,
          isFavourite: !character.isFavourite,
        }
      )};
    case SET_ADDITIONAL_CHARACTER_INFO:
      return { ...state, list: state.list.map(character => character.id !== payload.id
        ? character
        : {
          ...character,
          ...payload,
        }
      )};
    default:
      return state;
  }
}
