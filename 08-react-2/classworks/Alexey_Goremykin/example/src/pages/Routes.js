import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import useRedditApi from 'hooks/useRedditApi';

import Login from 'pages/login';
import Callback from 'pages/callback';
import Home from 'pages/home';
import SearchResults from './search/SearchResults';

function Routes(props) {
  const [,,isLoggedIn] = useRedditApi();

  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/" exact component={() => <Home reactSubreddit={props.reactSubreddit} posts={props.posts} fetchPosts={props.fetchPosts} />} />
        <Route path="/search" exact component={() => <SearchResults reactSubreddit={props.reactSubreddit} posts={props.posts} fetchPosts={props.fetchPosts} />} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/callback" exact component={Callback} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default Routes;
