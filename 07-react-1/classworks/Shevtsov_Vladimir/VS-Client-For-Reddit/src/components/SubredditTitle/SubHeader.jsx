import React from 'react';

import './subheader.css';

export default (props) => {
  const { community_icon: communityIcon, url, title } = props.data;

  return (
    <div className="subheader">
      <img className="subheader-logo" src={communityIcon.replace('&amp;', '&')} alt="subreddit icon" />
      <div className="subheader-title">
        <h2>{title}</h2>
        <span>{url}</span>
      </div>
    </div>
  );

}