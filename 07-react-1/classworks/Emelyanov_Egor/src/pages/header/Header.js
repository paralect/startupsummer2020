import React, { Component } from 'react';
import logo from './Reddit-logo.svg';
import searchElem from './search-elem.svg';

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <img className="logo" src={logo} />
          <div className="search-input">
            <img src={searchElem} />
            <input
              type="text"
              value={this.props.inputValue}
              onChange={this.props.inputChangeHandler}
            />
          </div>
        </header>
        <div className="strip" />
      </>
    );
  }
}

export default Header;
