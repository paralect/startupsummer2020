import React from 'react';
import './Communities.css';
import CommunitiesList from 'components/CommunitiesList/CommunitiesList';

function Communities(props) {
  return (
    <div className='communities'>
      <h1>Communities and users</h1>
      <CommunitiesList
        data={props.data}
        searchValue={props.searchValue}
        getPosts={props.getPosts} />
    </div>
  );
}

export default Communities;
