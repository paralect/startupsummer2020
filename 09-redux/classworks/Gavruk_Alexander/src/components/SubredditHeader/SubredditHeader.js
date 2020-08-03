import React from 'react';
import './SubredditHeader.css';
import { useSelector } from 'react-redux';
import * as subredditSelectors from '../../resources/subreddit/subreddit.selectors';

function SubredditHeader() {
  const communityTitleData = useSelector(subredditSelectors.getCommunityTitleData);

  return (
    <div className='subreddit-header'>
        <img src={communityTitleData.img || '/no-results.png'} alt={communityTitleData.communityUrl} />
        <div className='subreddit-header_title'>
            <h1>{communityTitleData.title}</h1>
            <span>{communityTitleData.communityUrl}</span>
        </div>
    </div>
  );
}

export default SubredditHeader;
