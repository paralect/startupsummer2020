import React from 'react';

import styles from './subreddit.module.css';

const format = (n) => Intl
  .NumberFormat('en-US', { notation: "compact", compactDisplay: "short" })
  .format(n);

export default (props) => {
  const { url, title, subscribers, community_icon: communityIcon } = props.data;

  return (
    <div className={styles.subreddit}>
      <img className={styles['subreddit-small-icon']} src={communityIcon.replace('&amp;', '&')} alt="subreddit icon" />
      <div className={styles['subreddit-url']}>
        <span>{url}</span>
        <div className={styles['subreddit-total_members']}>{format(subscribers)}</div>
      </div>
      <div className={styles['subreddit-title']}>
        <span>{title}</span>
      </div>
    </div>
  );
}