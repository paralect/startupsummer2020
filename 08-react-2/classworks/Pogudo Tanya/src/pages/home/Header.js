import React from "react";
import "./style.css";
import Student from "./react_img.png";

export default function Header(props) {
  return (
    <div className="head">
      <img
        className="img_size"
        src={props.header_img ? props.header_img : Student}
        alt=""
      />
      <h1 className="title_item">
        {props.searchString}
        <h1 className="title_item_1">{props.display_name_prefixed}</h1>
      </h1>
    </div>
  );
}
