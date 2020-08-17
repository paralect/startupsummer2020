import { FETCH_CHARACTERS } from './character.action';

const initialState = {
  characters: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS: {
      return {
        ...state,
        characters: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
