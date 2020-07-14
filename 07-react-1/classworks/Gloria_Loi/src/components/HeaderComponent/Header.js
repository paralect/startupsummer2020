import React from "react";

import SearchInput from "../SearchInput";
import Logo from "../Logo";

import "./Header.css";

const Header = (props) => (
  <div className="header">
    <Logo />
    <SearchInput handleChange={props.handleChange} />
  </div>
);

export default Header;
