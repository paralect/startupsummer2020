import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './input.css';
import searchIcon from './search-icon.svg';
import { fetchPosts, setSearchValue } from '../../resourses/actions';
import { getSearchValue } from '../../resourses/searchValue.selectors';
import { withRedditApi } from '../../hooks/useRedditApi';

function Input(props) {
  const dispatch = useDispatch();
  const searchValue = useSelector(getSearchValue);


  const handleBtnClick = () => {
    if (searchValue) {
      dispatch(fetchPosts(props, searchValue));
    }
  }

  return (
    <div className="search">
      <img
        src={searchIcon}
        className="search-icon"
      />
      <input
        onChange={(event) => {
          dispatch(setSearchValue(event.target.value));
        }}
        className="input"
        placeholder="Search"
      />
      <button
        className="button"
        onClick={handleBtnClick}
      >
        Search
      </button>
    </div>
  );
}

export default withRedditApi(Input);
