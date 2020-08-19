const FETCH_SUBREDDIT = 'fetchSubreddit';

const fetchSubreddit = ({
  fetchReddit,
  subreddit,
}) => async (dispatch) => {
  const data = await fetchReddit(`/r/${subreddit}/about`).then((res) => res.json());
  dispatch({
    type: FETCH_SUBREDDIT,
    payload: data,
  });
  return data;
};

export {
  FETCH_SUBREDDIT,
  fetchSubreddit,
};
