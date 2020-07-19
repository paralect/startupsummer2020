import {
  SET_REACT_SUBREDDITS_POSTS,
  SET_REACT_SUBREDDITS_POSTS_NULL,
  SET_SEARCH_VALUE
} from './types'

export function setSearchValue(seachValue) {
  return {
    type: SET_SEARCH_VALUE,
    payload: seachValue,
  }
}

export function fetchPosts(props, str) {
  console.log('Action fetch posts, props, str', props, str)
  return async dispatch => {
    const {fetchReddit} = props;
    const data = await fetchReddit('/subreddits/search?q=' + str.toString()).then(res => res.json());
    dispatch({
      type: SET_REACT_SUBREDDITS_POSTS,
      payload: data,
    });
  }
}


export function setPostsNull() {
  console.log('SetPostsNull');
  return {
    type: SET_REACT_SUBREDDITS_POSTS_NULL,
  };
}



