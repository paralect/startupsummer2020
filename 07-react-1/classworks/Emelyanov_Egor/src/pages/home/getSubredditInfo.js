import { setSubredditData } from '../../resources/subredditData/subredditData.actions';

export const getSubredditInfo = (fetchReddit, url) => async dispatch => {
  try {
    const data = await fetchReddit(url);
    const json = await data.json();
    dispatch(setSubredditData(json));
  }
  catch (err) {
    console.log('Error')
  }
}
