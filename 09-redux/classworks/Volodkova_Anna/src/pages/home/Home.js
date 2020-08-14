import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import List from '../../components/list';
import ListSearch from '../../components/listSearch';
import { getSubreddits } from '../../resourses/subreddits.selectors'
import { useSelector } from 'react-redux';

function Home(props) {
  const subreddits = useSelector(getSubreddits);

  if (!props.reactSubreddit || !props.reactAbout) {
    return (
      <p>Loading...</p>
    );
  }

  return subreddits.posts ?
    <ListSearch
      arrData={subreddits.posts.data.children}
      handle={props.handle}
    /> :
    <List
      arrData={props.reactSubreddit.data.children}
      arrAbout={props.reactAbout}
    />
}

export default withRedditApi(Home);
