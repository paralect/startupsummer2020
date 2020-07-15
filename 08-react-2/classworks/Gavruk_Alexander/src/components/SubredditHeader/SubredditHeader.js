import React from 'react';
import './SubredditHeader.css';

function SubredditHeader(props) {
  return (
    <div className='subreddit-header'>
        <img src={props.communityTitleData.img || '/no-results.png'} alt={props.communityTitleData.communityUrl} />
        <div className='subreddit-header_title'>
            <h1>{props.communityTitleData.title}</h1>
            <span>{props.communityTitleData.communityUrl}</span>
        </div>
    </div>
  );
}

export default SubredditHeader;
