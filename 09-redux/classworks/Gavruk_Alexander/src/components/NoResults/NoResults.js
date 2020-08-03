import React from 'react';
import { useSelector } from 'react-redux';

import * as subredditSelectors from 'resources/subreddit/subreddit.selectors';
import './NoResults.css';

function NoResults() {
  const searchValue = useSelector(subredditSelectors.getSearchValue);

  return (
    <section className='no-results'>
      <img src='/no-results.png' alt='sorry :(' />
      <span>Sorry, there were no community results for <b>{searchValue}</b></span>
    </section>
  );
}

export default NoResults;
