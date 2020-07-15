import React from 'react';
import './NoResults.css';

function NoResults(props) {
  return (
    <section className='no-results'>
      <img src='/no-results.png' alt='sorry :(' />
      <span>Sorry, there were no community results for <b>{props.searchValue}</b></span>
    </section>
  );
}

export default NoResults;
