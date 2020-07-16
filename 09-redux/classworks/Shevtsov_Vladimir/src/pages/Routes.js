import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from 'pages/login';
import Callback from 'pages/callback';
import Home from 'pages/home';
import SearchSubreddit from 'pages/searchSubreddit';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'resources/auth/auth.selectors';

function Routes() {
  const isLoggedIn = useSelector(getIsLoggedIn);

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
