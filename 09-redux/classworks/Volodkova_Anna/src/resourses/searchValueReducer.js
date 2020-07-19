import {SET_SEARCH_VALUE} from "./types";

const initialState = {
  value: ''
};

export const searchValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {...state, value: action.payload}
    default:
      return state;

  }
}