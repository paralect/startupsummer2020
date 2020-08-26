const FETCH_SEARCH = 'fetchSearch';

const fetchSearch = ({
  fetchReddit,
  phrase,
}) => async (dispatch) => {
  const data = await fetchReddit(`/subreddits/search?q=${phrase}`).then((res) => res.json());
  dispatch({
    type: FETCH_SEARCH,
    payload: data,
  });
  return data;
};

export {
  FETCH_SEARCH,
  fetchSearch,
};
