import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSubredditData, getInputValue } from '../../entity.selectors';

function CommunityList() {
  const subredditData = useSelector(getSubredditData);
  const inputValue = useSelector(getInputValue);


  return (
    <div className="bg-gray">
      <p className="search-results-p">
        Search results for “
        <span className="fw-b">{ inputValue }</span>
        ”
      </p>
      <p className="community-list_title">Communities and users</p>
      <div className="community-list_content">
        <ul>
        {subredditData.data.children.map(child => (
          <li key={child.data.id} >
            <Link to={{
              pathname: `/subreddit/${child.data.id}`,
              state: {
                url: child.data.url,
                img: child.data.icon_img,
                title: child.data.title,
                name: child.data.display_name_prefixed
              }
            }}>
          <div className="community-info">
            <img src={child.data.icon_img || lukashenkoImg}></img>
            <div>
              <p className="community-name">{child.data.display_name_prefixed}</p>
              <p className="community-members">
                {(child.data.subscribers / 1000).toFixed(1)}k Members
                </p>
            </div>
          </div>
          <p className="community-description">{child.data.public_description}</p>
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default CommunityList;
