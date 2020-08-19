import { fetchPostsArticles } from './fetchPostArticles.action';

export const fetchSubreddits = (inputString, fetchReddit, history) => async (
  dispatch
) => {
  if (inputString === '') {
    fetchPostsArticles(null, fetchReddit, history)(dispatch);
    return;
  }

  const subreddits = await fetchReddit(
    `/subreddits/search?limit=10&q=${inputString}`
  ).then((res) => res.json());
  dispatch({
    type: 'SET_SUBREDDITS',
    subreddits,
  });

  if (!subreddits?.data.children || subreddits?.data.children.length === 0) {
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
