import React from 'react';
import logo from './header.svg';
import iconSearch from './iconSearch.svg';
import './header.css';

// const showClick = (event) => {
//   console.log(event.target.value);
// }  

const Header = (props) => {
  return (
    <div className="header">
      <div className="headerContainer">
        <img src={logo}/>
          <div className="searchContainer">
            <img src={iconSearch}/>
            <input placeholder="Search" className="inputSearch" onChange={props.show}/>
          
          </div>
      </div>

      <div className="headerRow"></div>
    </div>
  )
}



export default Header;