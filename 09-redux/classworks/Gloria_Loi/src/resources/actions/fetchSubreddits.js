import { fetchPostsArticles } from './fetchPostArticles';

export const fetchSubreddits = (inputString, fetchReddit, history) => async (
  dispatch
) => {
  if (inputString === '') {
    fetchPostsArticles(undefined, fetchReddit, history)(dispatch);
    return;
  }

  const data = await fetchReddit(
    `/subreddits/search?limit=10&q=${inputString}`
  ).then((res) => res.json());

  dispatch({
    type: 'SET_SUBREDDITS',
    data,
  });

  if ((data.data.children && data.data.children.length === 0) || !data) {
    dispatch({
      type: 'SET_SEARCH_ERROR',
      searchError: true,
    });
  } else {
    dispatch({
      type: 'SET_SEARCH_ERROR',
      searchError: false,
    });
    history.push('/search');
  }
};
