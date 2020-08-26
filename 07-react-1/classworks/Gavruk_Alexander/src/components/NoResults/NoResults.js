import React from 'react';
import './NoResults.css';

class NoResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='no-results'>
        <img src='./no-results.png' alt='sorry :(' />
        <span>Sorry, there were no community results for <b>{this.props.searchValue}</b></span>
      </section>
    );
  }
}

export default NoResults;
