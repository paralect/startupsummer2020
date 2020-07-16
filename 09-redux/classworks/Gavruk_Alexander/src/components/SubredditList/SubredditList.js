import React from 'react';
import './SubredditList.css';
import moment from 'moment';
import * as SC from './subredditListStyles';
import { useSelector } from 'react-redux';
import * as subredditSelectors from '../../resources/subreddit/subreddit.selectors';

// Using styled components

function SubredditList() {
  const data = useSelector(subredditSelectors.getSubredditData);

  return (
    <SC.Section>
      {data.data.children.map(child => (
        <SC.ItemDiv key={child.data.id} className='subreddit-list-item'>
          <SC.PostedSpan>Posted by u/{child.data.author} {moment.unix(child.data.created).startOf('day').fromNow()}</SC.PostedSpan>
          <SC.H2>{child.data.title}</SC.H2>
          <SC.P>{child.data.selftext}</SC.P>
          <SC.CommentDiv className="subreddit-list-item_comment">
            <SC.Img src='/comment.jpg' alt="comment" />
            <SC.CommentSpan>{child.data.num_comments} Comments</SC.CommentSpan>
          </SC.CommentDiv>
        </SC.ItemDiv>
      ))}
    </SC.Section>
  );
}


export default SubredditList;
