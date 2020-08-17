import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { withRedditApi } from '../../hooks/useRedditApi';
import * as postActions from '../../resources/post/post.actions';
import * as subredditActions from '../../resources/subreddit/subreddit.actions';
import * as searchActions from '../../resources/search/search.actions';

import * as phraseSelectors from '../../resources/phrase/phrase.selectors';
import * as searchSelectors from '../../resources/search/search.selectors';

import LoadingPage from 'pages/loading';
import NoSearchPage from 'pages/no-search';
import SearchPage from 'pages/search';
import SubredditPage from 'pages/subreddit';

function Home(props) {
  const history = useHistory();
  const location = useLocation();

  const [isClickedSubreddit, setIsClickedSubreddit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const phrase = useSelector(phraseSelectors.getPhrase);
  const search = useSelector(searchSelectors.getSearch);

  const { fetchReddit } = props;

  const dispatch = useDispatch();

  const loadMainContent = async () => {
    setIsLoading(true);
      if (!phrase) {
        await Promise.all([
          dispatch(postActions.fetchPosts({ fetchReddit, subreddit: 'gaming' })),
          dispatch(subredditActions.fetchSubreddit({ fetchReddit, subreddit: 'gaming' })),
        ]);
      } else {
        await dispatch(searchActions.fetchSearch({ fetchReddit, phrase }));
      }
    setIsLoading(false);
  };

  useEffect(() => {
    if (phrase && !isClickedSubreddit) {
      history.push('/search');
    }  else {
      history.push('/subreddit');
    }
    loadMainContent();
    setIsClickedSubreddit(false);
  }, [phrase]);

  const onSearchItemClick = async (chosenSubreddit) => {
    setIsLoading(true);
    setIsClickedSubreddit(true);
    history.push('/subreddit');

    await Promise.all([
      dispatch(postActions.fetchPosts({ fetchReddit, subreddit: chosenSubreddit })),
      dispatch(subredditActions.fetchSubreddit({ fetchReddit, subreddit: chosenSubreddit })),
    ]);

    setIsClickedSubreddit(false);
    setIsLoading(false);
  };

  if (isLoading) return (<LoadingPage />);

  switch (location.pathname) {
    case '/subreddit': 
      return (<SubredditPage />);
    case '/search':
      if (search.dist === 0) return (<NoSearchPage />);
      return (<SearchPage onClick={onSearchItemClick}/>);
    default: 
      break;
  }
}

export default withRedditApi(Home);
