import React from 'react';
import './input.css';
import searchicon from './search-icon.svg';

function Input (props) {
    return (
      <div className="search">
        <img src={searchicon} className="search-icon"/>
        <input onChange={props.handleOnChangeInput} className="input" placeholder="Search"/>
        <button className="button" onClick={props.handleBtnClick}>Search</button>
      </div>
    );
}

export default Input;