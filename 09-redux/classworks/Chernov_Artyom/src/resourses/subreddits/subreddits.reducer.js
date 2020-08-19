export const GET_SUBREDDITS = "GET_SUBREDDITS"
export const GET_CURRENT_SUBBREDDIT = "GET_CURRENT_SUBBREDDIT"

export const initState = {
  subreddits: null,
  currentSubreddit: null,
}

export default (state = initState, action) => {
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

    default:
      return state;
  }
};