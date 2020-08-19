import React from 'react';
import './SearchResultsHeader.css';

function SearchResultsHeader(props) {
  return (
    <div className='search-results-header'>
      <span>Search results for "<b>{props.searchValue}</b>"</span>
    </div>
  );
}

export default SearchResultsHeader;
