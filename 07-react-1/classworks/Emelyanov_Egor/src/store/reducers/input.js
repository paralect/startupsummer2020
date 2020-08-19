import { SET_INPUT_VALUE } from "../../resources/input/input.actions";

const initialState = {
  value: ''
};

export default function input(state = initialState, { type, payload }) {
  switch (type) {
    case SET_INPUT_VALUE:
      return { ...state, value: payload };
    default:
      return state;
  }
}
