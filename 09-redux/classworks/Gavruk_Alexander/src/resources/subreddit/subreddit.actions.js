export const updateCommunityTitleData = (communityTitleData) => (dispatch) => {
  dispatch({ type: 'subreddit:setCommunityTitleData', payload: { communityTitleData } });
}

export const fetchData = (data) => (dispatch) => {
  dispatch({ type: 'subreddit:setData', payload: data});
}

export const updateIsPostsData = (isPostsData) => (dispatch) => {
  dispatch({ type: 'subreddit:setIsPostsData', payload: { isPostsData } });
};

export const search = (searchValue) => (dispatch) => {
  dispatch({ type: 'subreddit:search', payload: { searchValue } });
};
