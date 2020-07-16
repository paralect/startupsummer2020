import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

const BASE_URL = 'https://oauth.reddit.com';

const RedditApiTokenContext = createContext(null);

export default function useRedditApi() {
  const [apiToken, setApiToken] = useContext(RedditApiTokenContext);

  useEffect(() => {
    const token = localStorage.getItem('redditApiToken');
    if (token) setApiToken(token);
  }, []);

  const fetch = useCallback(async (url, options = {}) => {
    return window.fetch(BASE_URL + url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        'Authorization': apiToken && `Bearer ${apiToken}`,
      }
    })
  }, [apiToken]);

  return [fetch, setApiToken, !!apiToken];
}

export function RedditApiTokenProvider({ children }) {
  const [apiToken, setApiToken] = useState(null);

  const setRedditApiToken = useCallback((token) => {
    localStorage.setItem('redditApiToken', token);
    setApiToken(token);
  }, []);

  return (
      <RedditApiTokenContext.Provider value={[apiToken, setRedditApiToken]}>
        {children}
      </RedditApiTokenContext.Provider>
  );
}

export function withRedditApi(Component) {
  return function (props) {
    const [fetchReddit] = useRedditApi();

    return (
        <Component {...props} fetchReddit={fetchReddit} />
    );
  }
}