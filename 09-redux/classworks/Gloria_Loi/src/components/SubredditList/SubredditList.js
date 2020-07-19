import React from "react";
import { useSelector } from "react-redux";

import Subreddit from "../Subreddit";

import "./SubrediitList.css";

const SubredditList = (props) => {
  const { reactSubreddit } = useSelector((state) => state);

  return (
    <div className="subreddits-container">
      {reactSubreddit.data.children.map((item) => (
        <Subreddit key={item.data.id} body={item} />
      ))}
    </div>
  );
};

export default SubredditList;
