import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setInputValue } from '../../store/actions/inputValue';
import logo from './Reddit-logo.svg';
import searchElem from './search-elem.svg';
import styles from './searchInputStyles.module.css';
import { getInputValue } from '../../entity.selectors';

function Header() {
  const dispatch = useDispatch();

  const inputValue = useSelector(getInputValue);

  return (
    <>
      <header>
        <img className="logo" src={logo} />
        <div className={styles['search-input']}>
          <img src={searchElem} />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => dispatch(setInputValue(e.target.value))}
          />
        </div>
      </header>
      <div className="strip" />
    </>
  );
}

export default Header;
