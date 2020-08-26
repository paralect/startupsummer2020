import React from "react";

import errorImg from "../../assets/images/file.svg";

import "./Error.css";

const Error = (props) => (
  <div className="error-container">
    <img src={errorImg} />
    <div>Sorry, we were no community results for "{props.inputString}"</div>
  </div>
);

export default Error;
