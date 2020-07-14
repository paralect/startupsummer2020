import React from "react";

import Subreddit from "../Subreddit";

import "./SubrediitList.css";

const SubredditList = (props) => (
  <div className="subreddits-container">
    {props.data.map((item) => (
      <Subreddit
        key={item.data.id}
        body={item}
        handlePostClick={props.handlePostClick}
        title={props.title}
      />
    ))}
  </div>
);

export default SubredditList;
