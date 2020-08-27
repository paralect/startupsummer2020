import React, { useState } from "react";
import "./style.css";
import Student from "./react_img.png";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

export default function Communities(props) {
  const [value, setValue] = useState(props.func);

  return (
    <div className="block_list">
      <div className="img_size">
        <img
          alt=" "
          className="img_size"
          src={props.post.header_img ? props.post.header_img : Student}
        />
      </div>
      <div className="button_div">
        <button
          className="button_click_title"
          onClick={() => {
            props.func(props.post.display_name,props.post.display_name_prefixed, props.post.header_img,props.post.display_name);
          }}
        >
          <Link to={`/home/${props.post.display_name}`} className="title_sub">
            {props.post.display_name_prefixed}
          </Link>
        </button>

        <div className="members_style">
          {props.post.subscribers === null
            ? "no this field"
            : props.post.subscribers.toString().length === 4
            ? `${props.post.subscribers.toString().substring(0, 1)}k Members`
            : props.post.subscribers.toString().length === 5
            ? `${props.post.subscribers.toString().substring(0, 2)}k Members`
            : props.post.subscribers.toString().length === 6
            ? `${props.post.subscribers.toString().substring(0, 3)}k Members`
            : props.post.subscribers.toString().length === 7
            ? `${props.post.subscribers.toString().substring(0, 1)}m Members`
            : props.post.subscribers.toString().length === 8
            ? `${props.post.subscribers.toString().substring(0, 2)}m Members`
            : props.post.subscribers.toString().length === 9
            ? `${props.post.subscribers.toString().substring(0, 3)}m Members`
            : "no members"}
        </div>
      </div>

      <div className="description_style">
        {props.post.public_description
          ? props.post.public_description
          : "no public description"}
      </div>
    </div>
  );
}
