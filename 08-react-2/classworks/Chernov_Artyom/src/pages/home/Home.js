import React, {useContext, useEffect} from 'react';
import { ContextApp } from '../../reducers/redditReducer';
import { withRedditApi } from 'hooks/useRedditApi';

import Subreddit from '../../components/subreddit/Subreddit';
import {getCurrentSubreddit, getSubreddit} from '../../reducers/api';
import Redirect from 'react-router-dom/es/Redirect';

const Home = (props) => {
  const {state, dispatch} = useContext(ContextApp);
  let name = props.match.params.name || 'react';
  useEffect(() => {
    getSubreddit(dispatch, props.fetchReddit, name);
    getCurrentSubreddit(dispatch, props.fetchReddit, name);
  }, []);

  if (!state.subreddits) {
    return (
        <p>Loading...</p>
    );
  }

  if(state.subreddits.length === 0){
    return <Redirect to={"/not_found"}/>
  }

  return (
      <>
        <section>
          {state.subreddits.map(child => (
              <Subreddit
                  key={child.data.id}
                  author={child.data.author}
                  title={child.data.title}
                  selftext={child.data.selftext}
                  time={child.data.created}
              />
          ))}
        </section>
      </>
  );
};


export default withRedditApi(Home);
