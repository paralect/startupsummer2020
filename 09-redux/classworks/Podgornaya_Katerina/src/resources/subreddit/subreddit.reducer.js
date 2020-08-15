import { FETCH_SUBREDDIT } from './subreddit.action';

const initialState = {
  subreddit: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBREDDIT: {
      return {
        ...state,
        subreddit: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};
