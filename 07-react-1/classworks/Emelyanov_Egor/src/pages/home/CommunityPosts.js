import React from 'react';
import { useSelector } from 'react-redux';
import moment from "moment";

import lukashenkoImg from './lukashenko.jpg';
import comment from './comment.jpg';
import { getSubredditData } from '../../entity.selectors';

function CommunityPosts() {
  const subredditData = useSelector(getSubredditData);


  return (
    <div className="community-posts">
      <div className="community-info">
        <img className="community-posts_logo" src={props.location.state.img || lukashenkoImg} />
        <div>
          <h3>{props.location.state.title}</h3>
          <p>{props.location.state.name}</p>
        </div>
      </div>
      <div className="bg-gray">
      <ul>
        {
          subredditData.data.children.map(child => (
            <li key={child.data.id} className="post">
              <p>Posted by {child.data.subreddit_name_prefixed}&#nbsp;
              {moment.unix(child.data.created).startOf('day').fromNow()} ago</p>
              <p className="post_title">{child.data.title}</p>
              <p>{child.data.selftext}</p>
              <div>
                <img src={comment}></img>
                <p>{child.data.num_comments} Comments</p>
              </div>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  );
}

export default CommunityPosts;
