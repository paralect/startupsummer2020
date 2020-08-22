export default function subreddit(state = { reactSubreddit: [], about: null }, action) {
  switch (action.type) {
    case 'reactSubreddit:set':
      return {
        ...state,
        reactSubreddit: action.payload.reactSubreddit,
      };
    case 'about:set':
      return {
        ...state,
        about: action.payload.about,
      };
    default:
      return state;
  }
}