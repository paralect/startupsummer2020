import React from 'react';
import styles from '../home/home_style.module.css';
import { useSelector } from 'react-redux';
import moment from 'moment';

import no_subreddit_icon from './no_subreddit_icon.png';
import num_comments from './post_num_comments.svg';

import * as postSelectors from '../../resources/post/post.selectors';
import * as subredditSelectors from '../../resources/subreddit/subreddit.selectors';

function SubredditPage () {
  const posts = useSelector(postSelectors.getPosts);
  const subreddit = useSelector(subredditSelectors.getSubreddit);

  return (
    <section className={styles.section}>
      <header className={styles.header_home}>
        <img src={subreddit.icon_img || no_subreddit_icon || subreddit.community_icon} className={styles.subreddit_icon}></img>
        <div className={styles.title_subreddit}>
          <h1 className={styles.title_subreddit_name}>{subreddit.title}</h1>
          <h5 className={styles.title_subreddit_subname}>{subreddit.display_name_prefixed}</h5>
        </div>
      </header>
      <content className={styles.subreddit_content}>
        {posts.map((post) => (
          <div key={post.data.id} className={styles.post_field}>
            <div className={styles.post_author}>Posted by {post.data.author} {moment.unix(post.data.created).fromNow()}</div>
            <h2 className={styles.post_title}>{post.data.title}</h2>
            <p className={styles.post_selftext}>{post.data.selftext || post.data.url}</p>
            <div className={styles.post_num_comments}>
              <img src={num_comments}></img>
              {post.data.num_comments} comments
          </div>
          </div>
        ))}
      </content>
    </section>
  );
}

export default SubredditPage;