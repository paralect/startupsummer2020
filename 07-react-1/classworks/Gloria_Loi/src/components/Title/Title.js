import React from "react";

import svg from "../../assets/images/react.svg";

import "./Title.css";

const Title = ({ title: { data } }) => (
  <div className="title-logo">
    {console.log(data)}
    <img src={data.icon_img ? data.icon_img : svg} className="logo-img" />
    <div className="title-container">
      <div className="main-title">{data.title}</div>
      <div>{data.display_name_prefixed}</div>
    </div>
  </div>
);

export default Title;
