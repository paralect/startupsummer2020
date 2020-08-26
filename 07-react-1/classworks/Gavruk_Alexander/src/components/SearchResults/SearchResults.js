import React from 'react';
import SearchResultsHeader from '../SearchResultsHeader/SearchResultsHeader';
import Communities from '../Communities/Communities';
import './SearchResults.css';
import NoResults from 'components/NoResults/NoResults';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='search-results'>
        {
          this.props.data.data.children.length ?
          (
            <div>
              <SearchResultsHeader searchValue={this.props.searchValue} />
              <Communities data={this.props.data} searchValue={this.props.searchValue} getPosts={this.props.getPosts} />
            </div>
          ) :
          <NoResults searchValue={this.props.searchValue} />
        }
      </section>
    );
  }
}

export default SearchResults;
