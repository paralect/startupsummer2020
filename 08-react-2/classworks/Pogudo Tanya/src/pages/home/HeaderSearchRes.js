import React from "react";
import "./style.css";
import emptyPicture from "./img/emptyPage.svg";

export default class HeaderSearchRes extends React.Component {
  render() {
    return (
        <div>
        <div className="img_height"><img className="empty" src={emptyPicture} alt="" /></div>
        <div></div>
        <figcaption className="figcaption_location">Sorry, there were no community results</figcaption>
        <div></div>
        </div>
    );
  }
}
