import React from "react";
import { useSelector } from "react-redux";

import ListItem from "../ListItem";
import Title from "../Title/Title";

import "./MainContainer.css";

const MainContainer = (props) => {
  const { reactSubreddit } = useSelector((state) => state);

  return (
    <div className="main">
      <Title />
      {reactSubreddit.data.children.map((item) => (
        <ListItem key={item.data.id} body={item} />
      ))}
    </div>
  );
};

export default MainContainer;
