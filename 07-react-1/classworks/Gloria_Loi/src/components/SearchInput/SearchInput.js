import React from "react";
import svg from "assets/images/search.svg";

import "./Search.css";

const SearchInput = (props) => (
  <div className="search-block">
    <div className="search">
      <img src={svg} />
      <input
        className="search-input"
        onChange={props.handleChange}
        placeholder="Search"
      ></input>
    </div>
  </div>
);

export default SearchInput;
