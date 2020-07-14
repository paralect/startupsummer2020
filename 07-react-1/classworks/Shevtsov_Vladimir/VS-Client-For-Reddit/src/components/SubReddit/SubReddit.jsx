import React from 'react';

import './subreddit.css';

const format = (n) => Intl
  .NumberFormat('en-US', { notation: "compact", compactDisplay: "short" })
  .format(n);

export default (props) => {
  const { url, title, subscribers, community_icon: communityIcon } = props.data;

  return (
    <div className="subreddit">
      <img className="subreddit-small-icon" src={communityIcon.replace('&amp;', '&')} alt="subreddit icon" />
      <div className="subreddit-url">
        <span>{url}</span>
        <div className="subreddit-total_members">{format(subscribers)}</div>
      </div>
      <div className="subreddit-title">
        <span>{title}</span>
      </div>
    </div>
  );
}