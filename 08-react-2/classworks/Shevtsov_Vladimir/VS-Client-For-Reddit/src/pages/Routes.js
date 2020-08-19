import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import useRedditApi from 'hooks/useRedditApi';

import Login from 'pages/login';
import Callback from 'pages/callback';
import Home from 'pages/home';
import SearchSubreddit from 'pages/searchSubreddit';

function Routes() {
  const [, , isLoggedIn] = useRedditApi();

  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/subreddits/search/:query" exact component={SearchSubreddit}/>
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
