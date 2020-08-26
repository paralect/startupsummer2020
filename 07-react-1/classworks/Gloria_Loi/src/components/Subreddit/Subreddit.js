import React from "react";

import svg from "../../assets/images/react.svg";

import "./Subreddit.css";

const Subreddit = ({ body: { data }, handlePostClick, title }) => (
  <div className="subreddit" onClick={() => handlePostClick(title)}>
    <img className="subreddit-img" src={data.icon_img ? data.icon_img : svg} />
    <div className="post-path">{data.display_name_prefixed}</div>
    <div className="description">{data.public_description}</div>
  </div>
);

export default Subreddit;
