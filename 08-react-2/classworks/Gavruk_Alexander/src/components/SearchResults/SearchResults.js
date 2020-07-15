import React from 'react';
import SearchResultsHeader from '../SearchResultsHeader/SearchResultsHeader';
import Communities from '../Communities/Communities';
import './SearchResults.css';
import NoResults from 'components/NoResults/NoResults';

function SearchResults(props) {
  return (
    <section className='search-results'>
      {
        props.data.data.children.length ?
        (
          <div>
            <SearchResultsHeader searchValue={props.searchValue} />
            <Communities 
              data={props.data}
              searchValue={props.searchValue}
              getPosts={props.getPosts}
              updateIsPostsData={props.updateIsPostsData}
            />
          </div>
        ) :
        <NoResults searchValue={props.searchValue} />
      }
    </section>
  );
}

export default SearchResults;
