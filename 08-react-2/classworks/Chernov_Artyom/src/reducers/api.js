import {GET_CURRENT_SUBBREDDIT, GET_SUBREDDITS, GET_SEARCH_RESULTS, SET_CURRENT_SUBREDDIT} from './redditReducer';

export const getSubreddit = async (dispatch, fetchReddit, req) => {
  const res = await fetchReddit(`/r/${req}/hot`).then(res => res.json());
  dispatch({
    type: GET_SUBREDDITS,
    payload: [...res.data.children]
  })
}

export const getCurrentSubreddit = async (dispatch, fetchReddit, req = 'react') => {
  const res = await fetchReddit(`/r/${req}/about`).then(res => res.json());
  dispatch({
    type: GET_CURRENT_SUBBREDDIT,
    payload: res.data
  });
};

export const sendSearchRequest = async (dispatch, fetchReddit, req) => {
  const res = await fetchReddit(`/subreddits/search?q=${req}`).then(res => res.json());
  dispatch({
    type: GET_SEARCH_RESULTS,
    payload: [...res.data.children]
  })
  dispatch({
    type: SET_CURRENT_SUBREDDIT,
    payload: null
  })
};
