import React from 'react';
import SubredditHeader from 'components/SubredditHeader/SubredditHeader';
import SubredditList from 'components/SubredditList/SubredditList';
import './Subreddit.css';

function Subreddit() {
  return (
    <div className='subreddit'>
      <SubredditHeader />
      <SubredditList />
    </div>
  );
}

export default Subreddit;
