export const updateCommunityTitleData = (communityTitleData) => (dispatch) => {
  dispatch({ type: 'subreddit:setCommunityTitleData', payload: { communityTitleData } });
}

export const fetchData = (fetchReddit, url) => async (dispatch) => {
  const data = await fetchReddit(url).then(res => res.json());
  dispatch({ type: 'subreddit:setData', payload: data});
}

export const updateIsPostsData = (isPostsData) => (dispatch) => {
  dispatch({ type: 'subreddit:setIsPostsData', payload: { isPostsData } });
};

export const search = (searchValue) => (dispatch) => {
  dispatch({ type: 'subreddit:search', payload: { searchValue } });
};
