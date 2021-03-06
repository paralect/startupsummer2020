import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import useRedditApi from 'hooks/useRedditApi';

import Login from 'pages/login';
import Callback from 'pages/callback';
import Home from 'pages/home';
import Search from './search';

function Routes({ submit, reactSubreddit, about, search, searchResults }) {
  const [fetchReddit,,isLoggedIn] = useRedditApi();

  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/" exact render={() => <Home fetchReddit={fetchReddit} reactSubreddit={reactSubreddit} about={about} search={search}/>} />
        <Route
          path="/search"
          render={() => 
            <Search
              fetchReddit={fetchReddit}
              submit={submit}
              search={search}
              searchResults={searchResults}
              isSearchPage
            />}
        />
        <Route path="/null" exact component={null}/>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/callback" component={Callback} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default Routes;
