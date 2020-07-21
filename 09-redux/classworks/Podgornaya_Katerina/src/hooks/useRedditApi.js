import React, { createContext, useState, useContext, useCallback } from 'react';

const BASE_URL = 'https://oauth.reddit.com';

const RedditApiTokenContext = createContext(null);

export default function useRedditApi() {
  const [apiToken, setApiToken] = useContext(RedditApiTokenContext);

  const setToken = (token) => {
    setApiToken(token);
    localStorage.setItem('redditToken', token);
  }

  const fetch = useCallback(async (url, options = {}) => {
    return window.fetch(BASE_URL + url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        'Authorization': apiToken && `Bearer ${apiToken}`,
      }
    })
  }, [apiToken]);

  return [fetch, setToken, !!apiToken, apiToken];
}

export function RedditApiTokenProvider({ children }) {
  const [apiToken, setApiToken] = useState(localStorage.getItem('redditToken'));

  return (
    <RedditApiTokenContext.Provider value={[apiToken, setApiToken]}>
      {children}
    </RedditApiTokenContext.Provider>
  );
}

export function withRedditApi(Component) {
  return function (props) {
    const [fetchReddit, , redditToken] = useRedditApi();

    return (
      <Component {...props} fetchReddit={fetchReddit} />
    );
  }
}
