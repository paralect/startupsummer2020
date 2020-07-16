import React, { useState } from 'react';
import logo from './Reddit-logo.svg';
import searchElem from './search-elem.svg';
import styles from './searchInputStyles.module.css';
import { useDispatch } from 'react-redux';

import { setInputValueAction } from "../../store/actions/inputValue";

function Header() {

  const dispatch = useDispatch();

  const [inputVal, setInputVal] = useState('');

  const inputChangeHandler = (e) => {
    setInputVal(e.target.value);
    dispatch(setInputValueAction(e.target.value))
  }

  return (
    <>
      <header>
        <img className="logo" src={logo} />
        <div className={styles['search-input']}>
          <img src={searchElem} />
          <input
            type="text"
            value={inputVal}
            onChange={inputChangeHandler}
          />
        </div>
      </header>
      <div className="strip" />
    </>
  );
}

export default Header;
