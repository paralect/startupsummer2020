import React, { useEffect } from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import Header from 'components/header';
import Title from 'components/title';
import PostBlock from 'components/post_block';
import styles from './home.module.css';
import { useHistory } from 'react-router-dom';
import Spinner from 'components/spinner';

function Home(props){
  const { fetchReddit } = props;
  const [reactSubreddit, setReactSubreddit] = props.reactSubreddit;
  const [about, setAbout] = props.about;
  const history = useHistory();

  useEffect(() => {
    const preload = async () => {
      const data = await fetchReddit('/r/Twitch/hot').then(res => res.json());
      const about = await fetchReddit('/r/Twitch/about').then(res => res.json());
      setReactSubreddit(data.data.children);
      setAbout(about.data);
      console.log(data.data.children);
      console.log(about);
    }
    preload();
    // eslint-disable-next-line
  }, []);

  const loadSearch = (newSearch) => {
    history.push('/search?q=' + newSearch);
    console.log('hihi');
  };

  return (
    <main>
      <Header submit={loadSearch} isSearchPage={false} search={props.search} />
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
