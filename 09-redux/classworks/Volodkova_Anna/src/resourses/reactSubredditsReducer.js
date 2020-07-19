import {SET_REACT_SUBREDDITS_POSTS, SET_REACT_SUBREDDITS_POSTS_NULL} from './types';

const initialState = {
  posts: null,
};

export const reactSubredditsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REACT_SUBREDDITS_POSTS:
      return {...state, posts: action.payload}
    case SET_REACT_SUBREDDITS_POSTS_NULL:
      return {...state, posts: null}
    default:
      return state;

  }
}