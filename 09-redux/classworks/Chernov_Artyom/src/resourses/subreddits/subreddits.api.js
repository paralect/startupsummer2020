const BASE_URL = 'https://oauth.reddit.com/';

const token = localStorage.getItem('redditApiToken');

export const getSubreddits = (url, options={}) => {
  return window.fetch(`${BASE_URL}r/${url}/hot`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      'Authorization': token && `Bearer ${token}`,
    }
  }).then(response => response.json()).then((resData) => resData.data.children)
}

export const getCurrentSubreddit = (url, options={}) => {
  return window.fetch(`${BASE_URL}r/${url}/about`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      'Authorization': token && `Bearer ${token}`,
    }
  }).then(response => response.json())
}

