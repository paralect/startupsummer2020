import { FETCH_SEARCH } from './search.action';

const initialState = {
  subreddits: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH: {
      return {
        ...state,
        subreddits: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};
