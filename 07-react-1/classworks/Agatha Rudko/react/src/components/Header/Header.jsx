import React from "react";
import './Header.css';
import logo from '../../assets/logo.svg'
import {Search} from "../Search/Search";

const Header = () =>{
  return(
    <header>
      <div className={'whitePart'}>
        <img src={logo} className={'logo'}/>
        <Search/>
      </div>
      <div className={'orangePart'}>

      </div>
    </header>
  )
}
export {Header}