const BASE_URL = 'https://oauth.reddit.com/';

const token = localStorage.getItem('redditApiToken');

export const getSearchResults = (url, options={}) => {
  return window.fetch(`${BASE_URL}/subreddits/search?q=${url}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      'Authorization': token && `Bearer ${token}`,
    }
  }).then(response => response.json()).then((resData) => resData.data.children)
}

