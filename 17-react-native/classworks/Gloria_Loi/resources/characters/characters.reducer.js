import { GET_ALL, TOGGLE_FAV, GET_COMICS } from './characters.constants';

const initialState = {
  characters: [],
  comicsArray: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL: {
      return {
        ...state,
        characters: action.payload.characters,
      };
    }
    case TOGGLE_FAV: {
      return {
        ...state,
        characters: state.characters.map((item) =>
          item.id !== action.payload.id ? item : { ...item, isFav: !item.isFav }
        ),
      };
    }
    case GET_COMICS: {
      return {
        ...state,
        comicsArray: action.payload.comicsArray,
      };
    }
    default:
      return state;
  }
};
