import React from "react";

import { useDispatch } from "react-redux";

import svg from "assets/images/search.svg";

import "./Search.css";

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleChange = (event) =>
    dispatch({ type: "CHANGE_INPUT_STRING", inputString: event.target.value });

  return (
    <div className="search-block">
      <div className="search">
        <img src={svg} />
        <input
          className="search-input"
          onChange={handleChange}
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
};

export default SearchInput;
