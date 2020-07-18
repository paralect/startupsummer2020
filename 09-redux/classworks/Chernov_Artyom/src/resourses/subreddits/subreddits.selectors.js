export function selectSubreddits({ subreddits }) {
  return subreddits.subreddits;
}

export function selectCurrentSubreddit({ subreddits }) {
  return subreddits.currentSubreddit?.data;
}
