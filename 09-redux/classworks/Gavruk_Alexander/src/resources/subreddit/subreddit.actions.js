export const getPosts = ({
  communityTitleData
}) => (dispatch) => {
  dispatch({ type: 'subreddit:setCommunityTitleData', payload: { communityTitleData } });
}

export const fetchData = ({
  data
}) => (dispatch) => {
  dispatch({ type: 'subreddit:setData', payload: { data }});
}

export const updateIsPostsData = ({ isPostsData }) => (dispatch) => {
  dispatch({ type: 'subreddit:setIsPostsData', payload: { isPostsData } });
};
