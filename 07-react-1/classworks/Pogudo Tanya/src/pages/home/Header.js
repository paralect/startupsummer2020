import React from "react";
import "./style.css";
import Student from "./react_img.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className="head">

<div>
<img
          className="img_size"
          src={
            this.props.dataAbout.header_img
              ? this.props.dataAbout.header_img
              : Student
          }
          alt=""
        />
</div>


<div>
<h1 className="title_item">
            {this.props.dataAbout.title}{" "}
            <h1 className="title_item_1">
              {this.props.dataAbout.display_name_prefixed}
            </h1>
          </h1>
</div>
        </div>
      
    );
  }
}
