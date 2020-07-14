
import React from 'react';
import SearchInput from "../SearchInput";
import Logo from "../Logo";

import "./Header.css";

class Header extends React.Component {

 
    render() {
        return (
            <div className="header">
            <Logo/>
            <SearchInput input={this.props.input} click={this.props.click}/>
            </div>
          );
  }}
  
  export default Header;