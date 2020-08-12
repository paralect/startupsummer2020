export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_STORIES = 'GET_STORIES';
export const SET_STATUS = 'SET_STATUS';

const initialState = {
  characters: [],
  stories: [],
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

    case SET_STATUS:
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;
  }
};