import { FETCH_SUBREDDIT } from './subreddit.action';

const initialState = {
  now: [],
};

export default (subreddit = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBREDDIT: {
      return {
        ...subreddit,
        now: action.payload.data,
      };
    }
    default: {
      return subreddit;
    }
  }
};
