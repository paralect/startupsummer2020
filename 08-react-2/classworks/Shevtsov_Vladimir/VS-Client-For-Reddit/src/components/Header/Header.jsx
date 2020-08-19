import React, { useContext } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';

import styles from './header.module.css';
import logo from '../../assets/reddit_logo.svg';
import { RedditApiTokenContext } from 'hooks/useRedditApi';
import { useHistory } from 'react-router-dom';
import { LogOut } from './LogOut';

export default () => {
  const [, setToken] = useContext(RedditApiTokenContext);
  const history = useHistory();

  return (
    <>
      <div className={styles.header}>
        <img src={logo} alt="logo" onClick={() => history.push('/')} />
        <SearchBar />
        <LogOut type="button" onClick={() => setToken(null)} >Log out</LogOut>
      </div>
      <div className={styles['header-bottom']}></div>
    </>);
};
