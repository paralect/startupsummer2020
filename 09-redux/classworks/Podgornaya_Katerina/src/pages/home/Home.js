import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRedditApi } from 'hooks/useRedditApi';
import num_comments from './post_num_comments.svg';
import no_subreddit_icon from './no_subreddit_icon.png';
import moment from 'moment';
import App from 'App';
import cry from './cry.svg';
import { Route, useHistory, Switch, useLocation } from "react-router-dom";
import styles from './home_style.module.css'
import { fetchPosts as fetchPostsAction } from 'resources/post/post.action';
import { getPosts } from 'resources/post/post.selectors';

function Home(props) {
  const history = useHistory();
  const location = useLocation();

  const [subredditData, setSubredditData] = useState(null);
  const [subredditAbout, setSubredditAbout] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [isClickedSubreddit, setIsClickedSubreddit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  console.log(props.posts);

  useEffect(() => {
    setIsLoading(true);
    if (props.phrase && !isClickedSubreddit) {
      history.push('/search');
    } else {
      if (props.phrase && isClickedSubreddit) {
        history.push('/subreddit');
      }
      else {
        history.push('/subreddit');
      }
    }


    (async () => {
      setIsLoading(true);

      const { fetchReddit } = props;
      const [data, dataAbout, searchData] = await Promise.all([
        fetchReddit('/r/gaming/hot').then(res => res.json()),
        fetchReddit('/r/gaming/about').then(res => res.json()),
        fetchReddit(`/subreddits/search?q=${props.phrase}`).then(res => res.json()),
      ]);

      setSubredditData(data);
      setSubredditAbout(dataAbout);
      setSearchData(searchData);

      props.fetchPosts({ fetchReddit, subreddit: 'gaming' });

      setIsLoading(false);
    })();

    setSubredditData(null);
    setSubredditAbout(null);
    setSearchData(null);
    setIsClickedSubreddit(false);
  }, [props.phrase]);


  let onSearchItemClick = async (name) => {
    setIsLoading(true);
    history.push('/subreddit');

    const { fetchReddit } = props;

    const data = await fetchReddit(`/r/${name}/hot`).then(res => res.json());
    const dataAbout = await fetchReddit(`/r/${name}/about`).then(res => res.json());

    setSubredditData(data);
    setSubredditAbout(dataAbout);
    setIsClickedSubreddit(false);

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <p className={styles.loading}>Loading...</p>
    );
  }

  if (location.pathname === '/search') {
    if (searchData.data.dist === 0) {
      return (
        <section className={styles.no_results}>
          <img src={cry} />
          <div>
            Sorry, there were no community results for "<b>{props.phrase}</b>"
              </div>
        </section>
      )
    }

    if (location.pathname === '/search') {
      return (
        <section className={styles.section}>
          <header className={styles.header_search}>
            Search results for "<b>{props.phrase}</b>"
          </header>
          <h1 className={styles.search_title}>Communities and users</h1>
          <content className={styles.search_content}>
            {searchData.data.children.map(child => (
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
          <img src={subredditAbout.data.icon_img || no_subreddit_icon || subredditAbout.data.community_icon} className={styles.subreddit_icon}></img>
          <div className={styles.title_subreddit}>
            <h1 className={styles.title_subreddit_name}>{subredditAbout.data.title}</h1>
            <h5 className={styles.title_subreddit_subname}>{subredditAbout.data.display_name_prefixed}</h5>
          </div>
        </header>
        <content className={styles.subreddit_content}>
          {subredditData.data.children.map(child => (
            <div key={child.data.id} className={styles.post_field}>
              <div className={styles.post_author}>Posted by {child.data.author} {moment.unix(child.data.created).fromNow()}</div>
              <h2 className={styles.post_title}>{child.data.title}</h2>
              <p className={styles.post_selftext}>{child.data.selftext || child.data.url}</p>
              <div className={styles.post_num_comments}>
                <img src={num_comments}></img>
                {child.data.num_comments} comments
            </div>
            </div>
          ))}
        </content>
      </section>
    );
  }
}

export default connect(state => ({
  posts: getPosts(state),
}), {
  fetchPosts: fetchPostsAction,
})(withRedditApi(Home));
