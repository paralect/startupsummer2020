import {
  FETCH_POST_ARTICLE_STARTED,
  FETCH_POST_ARTICLE_COMPLETED,
  SET_SUBREDDITS,
  SET_SEARCH_ERROR,
  CHANGE_INPUT_STRING,
} from './const-types';

const initialState = {
  reactSubreddit: null,
  subRedditTitle: null,
  loading: false,
  searchError: false,
  inputString: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_ARTICLE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_ARTICLE_COMPLETED:
      return {
        ...state,
        loading: false,
        reactSubreddit: action.reactSubreddit,
        subRedditTitle: action.subRedditTitle,
        searchError: false,
      };
    case SET_SUBREDDITS:
      return {
        ...state,
        reactSubreddit: action.data,
      };
    case SET_SEARCH_ERROR: {
      return {
        ...state,
        searchError: action.searchError,
      };
    }
    case CHANGE_INPUT_STRING: {
      return {
        ...state,
        inputString: action.inputString,
      };
    }
    default:
      return state;
  }
};
