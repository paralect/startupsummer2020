import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useHistory, useLocation } from 'react-router-dom';
import { withRedditApi } from '../../hooks/useRedditApi';

import { fetchPosts } from '../../resources/post/post.action';
import { fetchSubreddit } from '../../resources/subreddit/subreddit.action';
import { fetchSearch } from '../../resources/search/search.action';

import getPosts from '../../resources/post/post.selector';
import getPhrase from '../../resources/phrase/phrase.selector';
import getSubreddit from '../../resources/subreddit/subreddit.selector';
import getSearch from '../../resources/search/search.selector';

import num_comments from './post_num_comments.svg';
import no_subreddit_icon from './no_subreddit_icon.png';
import cry from './cry.svg';
import styles from './home_style.module.css';

function Home(props) {
  const history = useHistory();
  const location = useLocation();

  const [isClickedSubreddit, setIsClickedSubreddit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const phrase = useSelector(getPhrase);
  const posts = useSelector(getPosts);
  const subreddit = useSelector(getSubreddit);
  const search = useSelector(getSearch);

  const { fetchReddit } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    if (phrase && !isClickedSubreddit) {
      history.push('/search');
    } else if (phrase && isClickedSubreddit) {
      history.push('/subreddit');
    } else {
      history.push('/subreddit');
    }

    (async () => {
      setIsLoading(true);

      dispatch(fetchPosts({ fetchReddit, subreddit: phrase || 'gaming' }));
      dispatch(fetchSubreddit({ fetchReddit, subreddit: phrase || 'gaming' }));
      if (phrase) {
        dispatch(fetchSearch({  fetchReddit, phrase: phrase }));
      }

      setIsLoading(false);
    })();

    setIsClickedSubreddit(false);
  }, [phrase]);

  const onSearchItemClick = async (choosedSubreddit) => {
    setIsLoading(true);
    setIsClickedSubreddit(true);
    history.push('/subreddit');

    const { fetchReddit } = props;

    dispatch(fetchPosts({ fetchReddit, subreddit: choosedSubreddit }));
    dispatch(fetchSubreddit({ fetchReddit, subreddit: choosedSubreddit }));

    setIsClickedSubreddit(false);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <p className={styles.loading}>Loading...</p>
    );
  }

  if (location.pathname === '/search') {
    if (search.dist === 0) {
      return (
        <section className={styles.no_results}>
          <img src={cry} />
          <div>
            Sorry, there were no community results for "<b>{phrase}</b>"
              </div>
        </section>
      );
    }

    if (location.pathname === '/search') {
      return (
        <section className={styles.section}>
          <header className={styles.header_search}>
            Search results for "<b>{phrase}</b>"
          </header>
          <h1 className={styles.search_title}>Communities and users</h1>
          <content className={styles.search_content}>
            {search.children.map((child) => (
              <div key={child.data.id} className={styles.search_item_field} onClick={() => onSearchItemClick(child.data.display_name)}>
                <div className={styles.search_community_logo}>
                  <img src={child.data.icon_img || no_subreddit_icon || child.data.community_icon} className={styles.search_subreddit_icon} />
                  <div className={styles.search_title_subreddit}>
                    <h1 className={styles.search_title_subreddit_name}>{child.data.display_name_prefixed}</h1>
                    <h5 className={styles.search_title_subreddit_subscribers}>{child.data.subscribers} Members</h5>
                  </div>
                </div>
                <div className={styles.search_community_description}>{child.data.public_description}</div>
              </div>
            ))}
          </content>
        </section>
      );
    }
  }

  if (location.pathname === '/subreddit') {
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
}

export default withRedditApi(Home);
