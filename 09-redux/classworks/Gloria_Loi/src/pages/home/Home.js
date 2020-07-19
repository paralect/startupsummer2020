import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSubreddits } from '../../resources/actions/fetchSubreddits';
import { fetchPostsArticles } from '../../resources/actions/fetchPostArticles';

import { withRedditApi } from 'hooks/useRedditApi';
import { Route, useHistory, Switch } from 'react-router-dom';

import SubredditsList from '../../components/SubredditList';
import MainContainer from 'components/MainContainer';
import Loader from '../../components/Loader';
import Error from '../../components/ErrorComponent';

const Home = (props) => {
  const {
    reactSubreddit,
    subRedditTitle,
    loading,
    searchError,
    inputString,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const { fetchReddit } = props;

  const isLoading = loading || !reactSubreddit || !subRedditTitle;

  useEffect(() => {
    fetchPostsArticles(undefined, fetchReddit, history)(dispatch);
  }, []);

  useEffect(() => {
    fetchSubreddits(inputString, fetchReddit, history)(dispatch);
  }, [inputString]);

  if (isLoading) return <Loader />;

  return (
    <>
      {searchError || !reactSubreddit.data ? (
        <Error inputString={inputString} />
      ) : (
        <Switch>
          {inputString !== '' && (
            <Route path='/search' exact render={() => <SubredditsList />} />
          )}
          <Route path='/' render={() => <MainContainer />} />
        </Switch>
      )}
    </>
  );
};
export default withRedditApi(Home);
