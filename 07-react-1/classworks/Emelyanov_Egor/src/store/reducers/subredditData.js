import { SET_SUBREDDIT_DATA } from "../actions";

const initialState = {
  subredditData: null,
};

export default function subredditData(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SUBREDDIT_DATA:
      return {
        ...state,
        subredditData: payload
    };
    default:
      return state;
  }
}
