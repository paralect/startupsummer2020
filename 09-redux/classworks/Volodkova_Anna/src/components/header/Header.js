import React from 'react';

import Input from '../input';
import logo from './logo.svg';
import './header.css';

function Header(props) {
  return (
    <div>
      <div className="header">
        <img src={logo} className="logo"/>
        <Input handleOnChangeInput={props.handleOnChangeInput} handleBtnClick={props.handleBtnClick}/>
      </div>
      <div className="strip"></div>
    </div>
  );
}

export default Header;