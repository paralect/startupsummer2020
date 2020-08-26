import React, { useEffect, useState, useRef } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from 'components/header';
import Pages from 'pages';
import { withRedditApi } from './hooks/useRedditApi';
import { setPosts } from './resourses/actions';

function App(props) {
  const dispatch = useDispatch();
  const [reactSubreddit, setReactSubreddit] = useState(null);
  const [reactAbout, setReactAbout] = useState(null);

  const getData = async (name = 'r/react') => {
    const { fetchReddit } = props;
    const data = await fetchReddit(`/${name}/hot`).then(res => res.json());
    setReactSubreddit(data);
    const about = await fetchReddit(`/${name}/about`).then(res => res.json());
    setReactAbout(about);
  }

  useEffect(() => {
    if (props.isToken) {
      getData();
      dispatch(setPosts(null));
    }
  }, [props.isToken]);

  const prevSubUrl = useRef();
  let match = useRouteMatch("/subreddit/:subredditUrl");

  useEffect(() => {
    if (match && match.params.subredditUrl !== prevSubUrl.current) {
      prevSubUrl.current = match.params.subredditUrl;
      getData(`r/${match.params.subredditUrl}`);
      dispatch(setPosts(null));
    }
  }, [match]);

  return (
      <main>
        <header>
          <Header/>
        </header>
        <section>
          <Pages
            reactSubreddit={reactSubreddit}
            reactAbout={reactAbout}
            handle={getData}
          />
        </section>
      </main>
  );
}

export default withRedditApi(App);
