import React from "react";
import styles from './Header.module.css';
import logo from '../../assets/logo.svg'
import {Search} from "../Search/Search";

const Header = () =>{
  return(
    <header>
      <div className={styles.whitePart}>
        <img src={logo} className={styles.logo}/>
        <Search/>
      </div>
      <div className={styles.orangePart}>

      </div>
    </header>
  )
}
export {Header}