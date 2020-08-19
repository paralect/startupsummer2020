import React from "react";

import "./ListItem.css";

const ListItem = ({
  body: {
    data: { author, selftext, url, title },
  },
}) => (
  <div className="item">
    <div className="author-name">Posted by {author}</div>
    <div className="title">{title}</div>
    <div className="content">{selftext ? selftext : url}</div>
  </div>
);

export default ListItem;
