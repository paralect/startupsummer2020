import React, { useContext, useEffect } from 'react';
import { RedditApiTokenContext } from 'hooks/useRedditApi';
import Thread from 'components/Thread';

import { useShowSubreddit } from 'hooks/useShowSubreddit';
import styles from './home.module.css';

const Home = () => {
  const [apiToken] = useContext(RedditApiTokenContext);
  const { result, loading, error, cancel } = useShowSubreddit({ url: `r/react/hot`, apiToken });

  useEffect(() => () => cancel(), [cancel]);

  return (
    <div>
      <section className={styles.main}>
        {loading && <div>Loading...</div>}
        {error && <div>Fetch error: {JSON.stringify(error)}</div>}
        {result && result.data.children.map(child => <Thread key={child.data.id} data={child.data} />)}
      </section>
    </div>
  );
};

export default Home;