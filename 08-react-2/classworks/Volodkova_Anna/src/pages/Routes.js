import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import useRedditApi from 'hooks/useRedditApi';

import Login from 'pages/login';
import Callback from 'pages/callback';
import Home from 'pages/home';

function Routes({reactSubreddit, reactAbout, reactSubreddits, handle}) {
  const [, , isLoggedIn] = useRedditApi();
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/" exact render={() => <Home reactSubreddit={reactSubreddit} reactAbout={reactAbout}
                                                  reactSubreddits={reactSubreddits} handle={handle}/>}/>
        <Route path="/subreddit/:subredditUrl" component={() => <Home reactSubreddit={reactSubreddit} reactAbout={reactAbout}
                                                                      reactSubreddits={reactSubreddits} handle={handle}/>} />
        <Redirect to="/"/>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact component={Login}/>
      <Route path="/callback" exact component={Callback}/>
      <Redirect to="/login"/>
    </Switch>
  );
}

export default Routes;
