import React from 'react';
import SubredditHeader from 'components/SubredditHeader/SubredditHeader';
import SubredditList from 'components/SubredditList/SubredditList';
import './Subreddit.css';

function Subreddit(props) {
  return (
    <div className='subreddit'>
      <SubredditHeader communityTitleData={props.communityTitleData} />
      <SubredditList data={props.data} />
    </div>
  );
}

export default Subreddit;
