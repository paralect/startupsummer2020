import React from "react";
import "./style.css";
import HeaderCenter from "./HeaderCenter.js";
import HeaderTop from "./HeaderTop.js";

export default function Main(props) {
  return (
    <div className="contextHeadHeight">
      <div>
        <HeaderTop func={props.func}></HeaderTop>
      </div>
      <div>
        <HeaderCenter></HeaderCenter>
      </div>
    </div>
  );
}
