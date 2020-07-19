import React from 'react';
import {withRedditApi} from 'hooks/useRedditApi';
import List from "../../components/list";
import ListSearch from "../../components/listSearch";
import {useSelector} from "react-redux";

function Home(props) {
  const getSubreddits = useSelector((state) => state.posts);
  console.log('From store home.js', getSubreddits);

  console.log('Home props', props);

  if (!props.reactSubreddit || !props.reactAbout) {
    return (
      <p>Loading...</p>
    );
  }

  return getSubreddits.posts ?
    <ListSearch arrData={getSubreddits.posts.data.children} handle={props.handle}/> :
    <List arrData={props.reactSubreddit.data.children} arrAbout={props.reactAbout}/>
}

export default withRedditApi(Home);
