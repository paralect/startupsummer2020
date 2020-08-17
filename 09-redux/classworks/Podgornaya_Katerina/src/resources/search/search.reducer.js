import { FETCH_SEARCH } from './search.actions';

const initialState = {
  search: { children: [] },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH: {
      return {
        ...state,
        search: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};
