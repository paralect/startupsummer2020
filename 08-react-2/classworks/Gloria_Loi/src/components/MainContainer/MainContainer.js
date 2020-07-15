import React from "react";

import ListItem from "../ListItem";
import Title from "../Title/Title";

import "./MainContainer.css";

const MainContainer = (props) => (
  <div className="main">
    <Title title={props.title} />
    {props.data.map((item) => (
      <ListItem key={item.data.id} body={item} />
    ))}
  </div>
);

export default MainContainer;
