export const fetchPostsArticles = (
  topic = 'react',
  fetchReddit,
  history
) => async (dispatch) => {
  dispatch({
    type: 'FETCH_POST_ARTICLE_STARTED',
  });

  const [data, title] = await Promise.all([
    fetchReddit(`/r/${topic}/hot?limit=10`).then((res) => res.json()),
    fetchReddit(`/r/${topic}/about?limit=10`).then((res) => res.json()),
  ]);

  dispatch({
    type: 'FETCH_POST_ARTICLE_COMPLETED',
    reactSubreddit: data,
    subRedditTitle: title,
  });

  history.push('/');
};
