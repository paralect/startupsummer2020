import React from 'react';
import SearchBar from 'components/SearchBar/SearchBar';

import styles from './header.module.css';
import logo from '../../assets/reddit_logo.svg';
import { useHistory } from 'react-router-dom';
import { LogOut } from './LogOut';
import { useDispatch } from 'react-redux';

import { clearToken } from '../../resources/auth/auth.actions';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <div className={styles.header}>
        <img src={logo} alt="logo" onClick={() => history.push('/')} />
        <SearchBar />
        <LogOut type="button" onClick={() => dispatch(clearToken())} >Log out</LogOut>
      </div>
      <div className={styles['header-bottom']}></div>
    </>);
};
