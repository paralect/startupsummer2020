import React from 'react';

//my login Ann's React Client for Reddit
const CLIENT_ID = '2gxwjwCt5C3Ktg'

const AUTH_LINK = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=token&state=${Math.random()}&redirect_uri=${'http://localhost:3000/callback'}&scope=read`;


function Login() {
  return (
    <a href={AUTH_LINK}>
      Log in to Reddit
    </a>
  );
}

export default Login;
