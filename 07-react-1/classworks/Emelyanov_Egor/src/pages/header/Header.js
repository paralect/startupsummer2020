import React, { Component } from 'react';
import logo from './Reddit-logo.svg';
import searchElem from './search-elem.svg';
import styles from './searchInputStyles.module.css'

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <img className="logo" src={logo} />
          <div className={styles['search-input']}>
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
