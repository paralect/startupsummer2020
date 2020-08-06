import React from "react";

export const GET_COMICS = "GET_COMICS";
export const GET_STORIES = "GET_STORIES";
// export const GET_CURRENT_SUBBREDDIT = "GET_CURRENT_SUBBREDDIT"
// export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS"
// export const SET_CURRENT_SUBREDDIT = "SET_CURRENT_SUBREDDIT"

export const ContextApp = React.createContext();

export const initState = {
  comics: null,
  isFetching: false,
  stories: null,
}

export const marvelReducer = (state, action) => {
  switch (action.type) {
    case GET_COMICS:
      return {
        ...state,
        comics: action.payload,
        isFetching: action.isFetching,
      };
    case GET_STORIES:
      return {
        ...state,
        stories: action.payload,
        isFetching: action.isFetching,
      };
    // case GET_CURRENT_SUBBREDDIT:
    //   return {
    //     ...state,
    //     currentSubreddit: action.payload
    //   };
    // case GET_SEARCH_RESULTS:
    //   return {
    //     ...state,
    //     searchResults: action.payload
    //   };
    default:
      return state;
  }
}

// const fetchData = useCallback(async () => {
//   const { data } = await fetchMarvel('/characters/1009664/comics');
//   console.log(data.data.results);
// }, []);
//

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