const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'subreddit:setData':
      return action.payload.data;

    case 'subreddit:setCommunityTitleData':
      return action.payload.communityTitleData;

    case 'subreddit:setIsPostsData':
      return action.payload.isPostsData;

    default:
      return state;
  }
}
