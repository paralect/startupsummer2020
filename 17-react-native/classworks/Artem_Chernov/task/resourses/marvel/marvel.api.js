import React from 'react';
import fetchMarvel from '../../fetchMarvel';

export const getCharacters = () => {
  return fetchMarvel('/characters');
};

export const getStories = async (dispatch, req) => {
  return fetchMarvel(`/characters/${req}/comics`);
};

// export const getCurrentSubreddit = async (dispatch, fetchReddit, req = 'react') => {
//
//   const res = await fetchReddit(`/r/${req}/about`).then(res => res.json());
//   dispatch({
//     type: GET_CURRENT_SUBBREDDIT,
//     payload: res.data
//   });
// };
//
// export const sendSearchRequest = async (dispatch, fetchReddit, req) => {
//   const res = await fetchReddit(`/subreddits/search?q=${req}`).then(res => res.json());
//   dispatch({
//     type: GET_SEARCH_RESULTS,
//     payload: [...res.data.children]
//   })
//   dispatch({
//     type: SET_CURRENT_SUBREDDIT,
//     payload: null
//   })
// };