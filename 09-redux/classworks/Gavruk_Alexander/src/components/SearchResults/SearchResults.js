import React from 'react';
import SearchResultsHeader from '../SearchResultsHeader/SearchResultsHeader';
import Communities from '../Communities/Communities';
import './SearchResults.css';
import NoResults from 'components/NoResults/NoResults';
import { useSelector } from 'react-redux';

import * as subredditActions from 'resources/subreddit/subreddit.actions';
import * as subredditSelectors from 'resources/subreddit/subreddit.selectors';

function SearchResults(props) {
  const data = useSelector(subredditSelectors.getSubredditData);
  
  return (
    <section className='search-results'>
      {
        data.data.children.length ?
        (
          <div>
            <SearchResultsHeader searchValue={props.searchValue} />
            <Communities 
              searchValue={props.searchValue}
            />
          </div>
        ) :
        <NoResults searchValue={props.searchValue} />
      }
    </section>
  );
}

export default SearchResults;
