import React, { useState } from "react";
import styles from "./style.css";
import RedditSvg from "./img/reddit.svg";
import { Link } from "react-router-dom";

export default function HeaderTop(props) {
  const [value, setValue] = useState("");

  return (
    <div className="headButtomTop">
      <div>
        <img alt="" src={RedditSvg} className="ImgMargin"></img>
      </div>
      <div>
        <input
          className="search"
          type="text"
          value={value}
          placeholder="Search"
          onChange={(event) => {
            props.func(event.target.value);
            setValue(event.target.value);
          }}
        />
      </div>
      <div className="button_size">
        <Link to={`/about/${value}`} className="inputMargin">
          Search
        </Link>
      </div>
    </div>
  );
}
