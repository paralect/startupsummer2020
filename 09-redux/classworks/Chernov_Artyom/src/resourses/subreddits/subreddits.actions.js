import * as api from "../subreddits/subreddits.api";
import { GET_CURRENT_SUBBREDDIT, GET_SUBREDDITS } from "./subreddits.reducer";

export const getSubreddits = (url) => async (dispatch) => {
  const subreddits = await api.getSubreddits(url);
  dispatch({ type: GET_SUBREDDITS, payload: [...subreddits]  });
};

export const getCurrentSubreddit = (url) => async (dispatch) => {
  const currentSubreddit = await api.getCurrentSubreddit(url);
  dispatch({ type: GET_CURRENT_SUBBREDDIT, payload: currentSubreddit });
};