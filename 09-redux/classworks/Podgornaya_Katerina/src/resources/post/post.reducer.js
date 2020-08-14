import { FETCH_POSTS } from './post.action';

const initialState = {
  list: [],
};

export default (posts = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return {
        ...posts,
        list: action.payload.data.children,
      };
    }
    default: {
      return posts;
    }
  }
};
