import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

const BASE_URL = 'https://oauth.reddit.com';

export default function useRedditApi() {
  const [apiToken, setApiToken] = useState(localStorage.getItem('redditApiToken'));

  const setRedditApiToken = useCallback((token) => {
    localStorage.setItem('redditApiToken', token);
    setApiToken(token);
  }, []);

  const fetch = useCallback(async (url, options = {}) => {
    return window.fetch(BASE_URL + url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        'Authorization': `Bearer ${apiToken}`,
      }
    })
  }, [apiToken]);

  return [fetch, setRedditApiToken, !!apiToken];
}

export function withRedditApi(Component) {
  return function (props) {
    const [fetchReddit, , isToken] = useRedditApi();

    return (
      <Component {...props} fetchReddit={fetchReddit} isToken={isToken} />
    );
  }
}