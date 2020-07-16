import React from "react";

export const GET_SUBREDDITS = "GET_SUBREDDITS"
export const GET_CURRENT_SUBBREDDIT = "GET_CURRENT_SUBBREDDIT"
export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS"
export const SET_CURRENT_SUBREDDIT = "SET_CURRENT_SUBREDDIT"

export const ContextApp = React.createContext();

export const initState = {
  subreddits: null,
  searchResults: null,
  currentSubreddit: null,
}

export const redditReducer = (state, action) => {
  switch (action.type) {
    case GET_SUBREDDITS:
      return {
        ...state,
        subreddits: action.payload
      };
    case GET_CURRENT_SUBBREDDIT:
      return {
        ...state,
        currentSubreddit: action.payload
      };
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };
    case SET_CURRENT_SUBREDDIT:
      return {
        ...state,
        currentSubreddit: action.payload
      };
    default:
      return state;
  }
}