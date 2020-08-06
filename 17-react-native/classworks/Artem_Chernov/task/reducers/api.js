import { GET_COMICS, GET_STORIES } from './marvelReducer';
import React, { useCallback } from 'react';
import fetchMarvel from '../fetchMarvel';

// const fetchData = useCallback(async () => {
//   const { data } = await fetchMarvel('/characters/1009664/comics');
//   console.log(data.data.results);
// }, []);


///characters/1009664/characters

export const getComics = async (dispatch, req) => {
  dispatch({
    type: GET_COMICS,
    isFetching: true,
  })
  const { data } = await fetchMarvel('/characters');
  dispatch({
    type: GET_COMICS,
    payload: [...data.data.results],
    isFetching: false,
  })

}

export const getStories = async (dispatch, req) => {
  console.log("REQ ", req);
  dispatch({
    type: GET_STORIES,
    isFetching: true,
  })
  const { data } = await fetchMarvel(`/characters/${req}/comics`);
  console.log("DADWAWDAW ", data.data);
  dispatch({
    type: GET_STORIES,
    payload: {...data.data},
    isFetching: false,
  })

}



// export const getCurrentSubreddit = async (dispatch, fetchReddit, req = 'react') => {
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