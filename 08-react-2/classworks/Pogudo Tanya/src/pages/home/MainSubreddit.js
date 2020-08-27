import React from "react";
import "./style.css";
import ReactImg from "./react_img.png";

export default class MainSubreddit extends React.Component {
  render() {
    return (
      <div className="head">
       <div> <img alt=" " className="img_size" src={ReactImg} /></div>
        <div>
          <h1 className="title_item">
            The React Library <h1 className="title_item_1">r/react</h1>
          </h1>
        </div>
      </div>
    );
  }
}