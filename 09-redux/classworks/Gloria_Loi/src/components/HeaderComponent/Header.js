import React from "react";

import SearchInput from "../SearchInput";
import Logo from "../Logo";

import "./Header.css";

const Header = () => (
  <div className="header">
    <Logo />
    <SearchInput />
  </div>
);

export default Header;
