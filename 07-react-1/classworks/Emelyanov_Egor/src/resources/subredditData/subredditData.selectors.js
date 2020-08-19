export const getSubredditData = store => store.subredditData.subredditData;

export const getCurrentSubredditData = (id) => store => {
  return store.subredditData.subredditData.data.children.find((subreddit) => subreddit.data.id === id);
}
