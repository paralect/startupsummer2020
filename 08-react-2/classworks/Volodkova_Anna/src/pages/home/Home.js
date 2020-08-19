import React from 'react';
import {withRedditApi} from 'hooks/useRedditApi';
import List from "../../components/list";
import ListSearch from "../../components/listSearch";

function Home (props) {

    console.log('Home props', props);

    if (!props.reactSubreddit || !props.reactAbout) {
      return (
        <p>Loading...</p>
      );
    }

    return props.reactSubreddits  ?
      <ListSearch arrData={props.reactSubreddits.data.children} handle={props.handle}/> :
      <List arrData={props.reactSubreddit.data.children} arrAbout={props.reactAbout} />
}

export default withRedditApi(Home);
