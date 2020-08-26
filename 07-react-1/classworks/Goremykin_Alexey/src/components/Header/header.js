import React from 'react';
import "./header.css";
import SearchImage from "./search.svg";
import Logo from "./logo.svg";



class Header extends React.Component {
  
  async componentDidMount() {
    this.props.fetchSubreddits();
  }

  state = {
    reactSubreddit: null,
  }


  inputValue = (event) => {
    this.props.fetchSubreddits(event.currentTarget.value);
  }

  render() {
  
    return (
      <div>
        <div className="header">
          <img className="logo" src={Logo} alt="logo" />
            <div className = "searchPanel">
              <img className="searchImage" src={SearchImage} alt="search" />
              <input className = "searchInput" type="string" placeholder="Search" onKeyDown={(value) => {this.inputValue(value)}}></input>
            </div>
        </div>
      </div>
    );
  }
}

  export default Header;