import React from 'react';

import Input from '../input';
import logo from './logo.svg';
import './header.css';

class Header extends React.Component {


  render() {
    return (
      <div>
        <div className="header">
          <img src={logo} className="logo"/>
          <Input handleOnChangeInput={this.props.handleOnChangeInput} handlebBtnClick={this.props.handlebBtnClick}/>

        </div>
        <div className="strip"></div>
      </div>
    );
  }

}

export default Header;