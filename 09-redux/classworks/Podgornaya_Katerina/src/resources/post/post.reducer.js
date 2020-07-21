import { FETCH_POSTS } from './post.action';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return {
        ...state,
        list: action.payload.data.children,
      };
    }
    default: {
      return state;
    }
  }
};
