import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

function Search(props) {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (value) => {
    setInputValue(value);
  };

  const onButtonClick = () => {
    props.searchHandler(inputValue);
  };

  return (
    <div className='search-input-wrapper'>
      <input onChange={(e) => onInputChange(e.target.value)} className='search-input' placeholder='Search' />
      <img src='/search-elem.svg' alt="search" className='search-input_search-icon' />
      <Link to={`/search/${inputValue}`}>
        <button onClick={onButtonClick}>Search</button>
      </Link>
    </div>
  );
};

export default Search;
