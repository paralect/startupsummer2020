import { GET_CHARACTERS, GET_STORIES, SET_STATUS } from './marvel.reducer';
import React from 'react';
import * as api from './marvel.api'


// const fetchData = useCallback(async () => {
//   const { data } = await fetchMarvel('/characters/1009664/comics');
//   console.log(data.data.results);
// }, []);

///characters/1009664/characters

export const getCharacters = () => async (dispatch) => {
  dispatch({ type: SET_STATUS, payload: true })
  const { data } = await api.getCharacters();
  dispatch({ type: GET_CHARACTERS, payload: [...data.data.results]  });
  dispatch({ type: SET_STATUS, payload: false })
};

export const getStories = (id) => async (dispatch) => {
  dispatch({ type: SET_STATUS, payload: true })
  const { data } = await api.getStories(id);
  console.log("datadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadata ", data);
  // dispatch({ type: GET_CHARACTERS, payload: [...data.data.results]  });
  // dispatch({ type: SET_STATUS, payload: false })
};


// export const getComics = async (dispatch, req) => {
//   dispatch({
//     type: GET_COMICS,
//     isFetching: true,
//   });
//   const { data } = await fetchMarvel('/characters');
//   dispatch({
//     type: GET_STORIES,
//     payload: [...data.data.results],
//     isFetching: false,
//   });
//
// };
//
// export const getStories = async (dispatch, req) => {
//   dispatch({
//     type: GET_STORIES,
//     isFetching: true,
//   });
//   const { data } = await fetchMarvel(`/characters/${req}/comics`);
//   dispatch({
//     type: GET_STORIES,
//     payload: [ ...data.data.results ],
//     isFetching: false,
//   });
// };

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