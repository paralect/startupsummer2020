import React, {useEffect} from 'react';
import styles from"./header.module.css";
import SearchImage from "./search.svg";
import Logo from "./logo.svg";



function Header(props) {
  useEffect(() => {
    props.fetchSubreddits();
  }, []);
  
  const searchSubreddits = (event) => {
    props.fetchSubreddits(event.currentTarget.value);
  }
  
  return (
    <div>
      <div className={styles.header}>
        <img className={styles.logo} src={Logo} alt="logo" />
          <div className = {styles.searchPanel}>
            <img className={styles.searchImage} src={SearchImage} alt="search" />
            <input className = {styles.searchInput} type="string" placeholder="Search" onKeyDown={(value) => {searchSubreddits(value)}}></input>
          </div>
      </div>
    </div>
  );
};

export default Header;