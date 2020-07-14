import React from 'react';
import './input.css';
import searchicon from './search-icon.svg';

class Input extends React.Component {
  render() {
    return (
      <div className="search">
        <img src={searchicon} className="search-icon"/>
        <input onChange={this.props.handleOnChangeInput} className="input" placeholder="Search"/>
        <button className="button" onClick={this.props.handlebBtnClick}>Search</button>
      </div>
    );

  }

}

export default Input;