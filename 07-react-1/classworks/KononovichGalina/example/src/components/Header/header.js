import React from 'react';
import logo from './header.svg';
import iconSearch from './iconSearch.svg';
import './header.css';

// const showClick = (event) => {
//   console.log(event.target.value);
// }  

export default class Header extends React.Component {
  onSearchChange = (e) => {
    this.props.onSearchChange(e.target.value);
  };


  render() {
    return (
      <div className="header">
        <div className="headerContainer">
          <img src={logo}/>
            <div className="searchContainer">
              <img src={iconSearch}/>
              <input 
                placeholder="Search" 
                className="inputSearch" 
                value={this.props.inputValue} 
                onChange={this.onSearchChange}
              />
            
            </div>
        </div>
    
        <div className="headerRow"></div>
      </div>
    )
  }
}







// export default Header;