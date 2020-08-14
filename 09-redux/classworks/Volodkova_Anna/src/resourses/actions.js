import {
  FETCH_REACT_SUBREDDITS_POSTS,
  SET_REACT_SUBREDDITS_POSTS,
  SET_SEARCH_VALUE
} from './types'

export function setSearchValue(searchValue) {
  return {
    type: SET_SEARCH_VALUE,
    payload: searchValue,
  }
}

export function fetchPosts(props, str) {
  return async dispatch => {
    const { fetchReddit } = props;
    const data = await fetchReddit('/subreddits/search?q=' + str.toString()).then(res => res.json());
    dispatch({
      type: FETCH_REACT_SUBREDDITS_POSTS,
      payload: data,
    });
  }
}

export function setPosts(value) {
  return {
    type: SET_REACT_SUBREDDITS_POSTS,
    payload: value,
  };
}



