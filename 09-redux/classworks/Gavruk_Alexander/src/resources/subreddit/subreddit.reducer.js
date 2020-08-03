const initialState = {
  data: null,
  communityTitleData: {
    img: '',
    title: 'The React Library',
    communityUrl: 'r/react'
  },
  isPostsData: true,
  searchValue: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'subreddit:setData':
      return {
        ...state,
        data: action.payload.data,
      };

    case 'subreddit:setCommunityTitleData':
      return {
        ...state,
        communityTitleData: action.payload.communityTitleData,
      };

    case 'subreddit:setIsPostsData':
      return {
        ...state,
        isPostsData: action.payload.isPostsData,
      };

    case 'subreddit:search':
      return {
        ...state,
        searchValue: action.payload.searchValue,
      };

    default:
      return state;
  }
}
