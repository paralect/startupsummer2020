import { FETCH_CHARACTERS, SWITCH_FAVOURITE } from './characters.types';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS: {
     return {
       ...state,
       list: action.payload.characters,
     }
    }
    case SWITCH_FAVOURITE: {
      return {
        ...state,
        list: state.list.map(item => item.id !== action.payload.id
          ? item
          : { ...item, isFav: !item.isFav }
        ),
      }
    }
    default:
      return state;
  }
}

