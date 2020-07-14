import React from 'react';

import './thread.css';
import commentsIcon from '../../assets/comments_icon.svg';

export default (props) => {
  const { id, title, selftext, num_comments: totalComments, author } = props.data;

  return (
    <section className="thread" key={id}>
      <p className="topic-starter">{`Posted by u/${author}`}</p>
      <h2 className="thread-title">{title}</h2>
      <p className="thread-text">{selftext}</p>
      <div className="thread-comments-link">
        <img src={commentsIcon} alt="icon" />
        <span className="comments-link">{`${totalComments} Comments`}</span>
      </div>
    </section>
  );
}