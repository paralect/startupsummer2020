import React from 'react';
import styles from './header.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import SearchBar from 'components/search';

function Header(props) {
  return (
    <header className={styles.app__header}>
      <div className={styles.header__main_line}>
        <Logo className={styles.logo} />
        <SearchBar submit={props.submit} />
      </div>
      <div className={styles.header__color_line}>{''}</div>
    </header>
  );
}

export default Header;
