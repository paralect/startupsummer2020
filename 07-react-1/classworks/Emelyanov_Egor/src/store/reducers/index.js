import { SET_INPUT_VALUE } from "../actions";

const initialState = {
  inputValue: ''
};

export default function inputInfo(state = initialState, { type, payload }) {
  switch (type) {
    case SET_INPUT_VALUE:
      return { ...state, inputValue: payload };
    default:
      return state;
  }
}
