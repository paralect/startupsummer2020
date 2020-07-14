
import React from 'react';
import "./Search.css";

class SearchInput extends React.Component {
    
    render() {
        return (
            <div className="search-block">
            <div className="search">

                <input className="search-input" onChange={this.props.input} placeholder="Search"></input>
            </div>
            <button className="search-button" onClick={this.props.click}/>
            </div>
          );
  }}
  
  export default SearchInput;