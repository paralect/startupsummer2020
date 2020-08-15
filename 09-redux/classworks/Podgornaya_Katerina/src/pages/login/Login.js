import React from 'react';
import styles from './login_style.module.css';

const CLIENT_ID = '_VNVZ2Bb0tAY3A';

const AUTH_LINK = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=token&state=${Math.random()}&redirect_uri=${'http://localhost:3000/callback'}&scope=read`;

function Login() {
  return (
    <a href={AUTH_LINK} className={styles.login}>
      Log in to Reddit
    </a>
  );
}

export default Login;
