import { combineReducers } from "redux";

import inputValue from "./inputValue";
import subredditData from "./subredditData";

export default combineReducers({
  inputValue,
  subredditData,
});

