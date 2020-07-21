export const FETCH_POSTS = 'fetchPosts';

export const fetchPosts = ({
  fetchReddit,
  subreddit,
}) => async dispatch => {
  const data = await fetchReddit(`/r/${subreddit}/hot`).then(res => res.json());
  dispatch({
    type: FETCH_POSTS,
    payload: data,
  });
  return data;
}