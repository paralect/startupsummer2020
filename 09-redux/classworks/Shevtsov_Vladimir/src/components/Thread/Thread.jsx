import React from 'react';

import styles from './thread.module.css';
import commentsIcon from '../../assets/comments_icon.svg';

export default (props) => {
  const { id, title, selftext, num_comments: totalComments, author } = props.data;

  return (
    <section className={styles["thread"]} key={id}>
      <p className={styles["topic-starter"]}>{`Posted by u/${author}`}</p>
      <h2 className={styles["thread-title"]}>{title}</h2>
      <p className={styles["thread-text"]}>{selftext}</p>
      <div className={styles["thread-comments-link"]}>
        <img src={commentsIcon} alt="icon" />
        <span className={styles["comments-link"]}>{`${totalComments} Comments`}</span>
      </div>
    </section>
  );
}
