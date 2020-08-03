import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Search.css';
import * as subredditActions from 'resources/subreddit/subreddit.actions';
import * as subredditSelectors from 'resources/subreddit/subreddit.selectors';

function Search() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(subredditSelectors.getSubredditData);

  const onInputChange = (value) => {
    setInputValue(value);
  };

  const onButtonClick = () => {
    dispatch(subredditActions.updateIsPostsData(data.hasOwnProperty('facets')));
    dispatch(subredditActions.search(inputValue));
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
