import React from 'react';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  onInputChange = (value) => {
    this.setState({
      inputValue: value
    });
  }

  onButtonClick = () => {
    this.props.searchHandler(this.state.inputValue);
  }

  render() {
    return (
      <div className='search-input-wrapper'>
        <input onChange={(e) => this.onInputChange(e.target.value)} className='search-input' placeholder='Search' />
        <img src='./search-elem.svg' className='search-input_search-icon' />
        <button onClick={this.onButtonClick}>Search</button>
      </div>
    );
  }
}

export default Search;
