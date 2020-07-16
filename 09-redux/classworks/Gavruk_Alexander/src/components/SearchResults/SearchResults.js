import React from 'react';
import SearchResultsHeader from '../SearchResultsHeader/SearchResultsHeader';
import Communities from '../Communities/Communities';
import './SearchResults.css';
import NoResults from 'components/NoResults/NoResults';
import { useSelector } from 'react-redux';

import * as subredditSelectors from 'resources/subreddit/subreddit.selectors';

function SearchResults() {
  const data = useSelector(subredditSelectors.getSubredditData);
  
  return (
    <section className='search-results'>
      {
        data.children.length
          ? (
            <div>
              <SearchResultsHeader />
              <Communities />
            </div>
            )
            : <NoResults />
      }
    </section>
  );
}

export default SearchResults;
