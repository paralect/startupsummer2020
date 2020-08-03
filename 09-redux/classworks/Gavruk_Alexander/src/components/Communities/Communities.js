import React from 'react';
import './Communities.css';
import CommunitiesList from 'components/CommunitiesList/CommunitiesList';

function Communities() {
  return (
    <div className='communities'>
      <h1>Communities and users</h1>
      <CommunitiesList />
    </div>
  );
}

export default Communities;
