export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_STORIES = 'GET_STORIES';
export const SET_STATUS = 'SET_STATUS';
export const SET_FAVOURITES = 'SET_FAVOURITES';

const initialState = {
  characters: [],
  stories: [],
  favourites: [],
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: [...action.payload]
      };

    case GET_STORIES:
      return {
        ...state,
        stories: [...action.payload]
      };

    case SET_FAVOURITES:
      let arr = [];
      if (state.favourites.includes(action.payload)){
        arr = state.favourites.filter(id => {
          return action.payload !== id
        });
      } else {
        arr = [...state.favourites, action.payload]
      }
      return {
        ...state,
        favourites: arr
      };

    case SET_STATUS:
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;
  }
};