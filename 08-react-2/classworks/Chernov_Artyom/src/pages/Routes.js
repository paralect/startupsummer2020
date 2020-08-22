import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import useRedditApi from 'hooks/useRedditApi';

import Login from 'pages/login';
import Callback from 'pages/callback';
import Home from 'pages/home';
import SearchResults from 'pages/searchResults/SearchResults';
import NotFound from '../components/notFound/NotFound';

function Routes() {
  const [,,isLoggedIn] = useRedditApi();

  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/subreddit/:name" render={props => <Home {...props} />} />
        <Route path="/search_results/:name?" component={SearchResults}/>
        <Route path="/not_found" exact component={NotFound}/>
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
