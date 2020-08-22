import React, { useEffect } from 'react';
import useRedditApi, { withRedditApi } from 'hooks/useRedditApi';
import Header from 'components/header';
import Title from 'components/title';
import PostBlock from 'components/post_block';
import styles from './home.module.css';
import Spinner from 'components/spinner';
import * as selectors from 'resources/selector';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBase } from 'components/services/request/fetch';

function Home(props){
  const [fetchReddit] = useRedditApi();
  const reactSubreddit = useSelector(selectors.getReactSubreddit);
  const about = useSelector(selectors.getAbout);
  const dispatch = useDispatch();

  useEffect(() => {
    const preload = async () => {
      const subreddit = await fetchBase(fetchReddit, '/r/Twitch');
      dispatch({type: 'reactSubreddit:set', payload: {reactSubreddit: subreddit.data} });
      dispatch({type: 'about:set', payload: {about: subreddit.about} });
    }
    preload();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <Header isSearchPage={false} search={props.search} />
      <section className={styles.container}>
        <Title about={about} />
        {
          !reactSubreddit.length && <Spinner />
        }
        {
          reactSubreddit.length > 0
          && reactSubreddit.map(child => (
            <PostBlock
              key={child.data.id} 
              title={child.data.title}
              text={child.data.selftext}
              info={{ date: child.data.created_utc, author: child.data.author }}
              comments={{ count: child.data.num_comments}}
            />
          ))
        }
      </section>
    </main>
    
  );

}

export default withRedditApi(Home);
