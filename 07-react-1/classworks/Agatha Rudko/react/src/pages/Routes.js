import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import useRedditApi from 'hooks/useRedditApi';

import Login from 'pages/login';
import Callback from 'pages/callback';
import Home from 'pages/home';
import SearchPage from "./SearchPage/SearchPage";


function Routes() {
  const [,,isLoggedIn] = useRedditApi();

  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/home" exect component={Home}/>
        <Route path="/" exact component={SearchPage} />
        {/*<Redirect from="/search" to="/" />*/}
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/callback" exact component={Callback} />
      {/*<Redirect to="/login" />*/}
    </Switch>
  );
}

export default Routes;
