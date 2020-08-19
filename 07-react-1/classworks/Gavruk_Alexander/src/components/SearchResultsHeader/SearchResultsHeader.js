import React from 'react';
import './SearchResultsHeader.css';

class SearchResultsHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-results-header'>
        <span>Search results for "<b>{this.props.searchValue}</b>"</span>
      </div>
    );
  }
}

export default SearchResultsHeader;
