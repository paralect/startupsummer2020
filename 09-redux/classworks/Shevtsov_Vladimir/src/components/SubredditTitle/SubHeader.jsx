import React from 'react';

import styles from './subheader.module.css';

export default (props) => {
  const { community_icon: communityIcon, url, title } = props.data;

  return (
    <div className={styles["subheader"]}>
      <img className={styles["subheader-logo"]} src={communityIcon.replace('&amp;', '&')} alt="subreddit icon" />
      <div className={styles["subheader-title"]}>
        <h2>{title}</h2>
        <span>{url}</span>
      </div>
    </div>
  );

}
