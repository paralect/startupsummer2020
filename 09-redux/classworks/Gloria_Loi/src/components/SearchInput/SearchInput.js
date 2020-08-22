import React from 'react';
import { useDispatch } from 'react-redux';

import { handleChange } from 'resources/actions/searchInput.actions';

import svg from 'assets/images/search.svg';

import './Search.css';

const SearchInput = () => {
  const dispatch = useDispatch();

  return (
    <div className="search-block">
      <div className="search">
        <img src={svg} />
        <input
          className="search-input"
          onChange={(event) => dispatch(handleChange(event.target.value))}
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
};

export default SearchInput;
