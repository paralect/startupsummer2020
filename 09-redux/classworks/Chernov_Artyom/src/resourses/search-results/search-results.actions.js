import * as api from './search-results.api'
import { GET_SEARCH_RESULTS } from './search-results.reducer';
import { GET_CURRENT_SUBBREDDIT } from "../subreddits/subreddits.reducer";

export const getSearchResults = (url) => async (dispatch) => {
  const searchResults = await api.getSearchResults(url);
  dispatch({ type: GET_SEARCH_RESULTS, payload: [...searchResults]  });
  dispatch({ type: GET_CURRENT_SUBBREDDIT, payload: null })
};