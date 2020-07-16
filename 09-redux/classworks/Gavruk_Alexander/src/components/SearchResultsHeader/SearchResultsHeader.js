import React from 'react';
import { useSelector } from 'react-redux';

import * as subredditSelectors from 'resources/subreddit/subreddit.selectors';
import './SearchResultsHeader.css';

function SearchResultsHeader() {
  const searchValue = useSelector(subredditSelectors.getSearchValue);

  return (
    <div className='search-results-header'>
      <span>Search results for "<b>{searchValue}</b>"</span>
    </div>
  );
}

export default SearchResultsHeader;
