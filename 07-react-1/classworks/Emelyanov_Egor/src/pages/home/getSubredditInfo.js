import { setSubredditData } from '../../store/actions/subredditData';

export const getSubredditInfo = url => dispatch => {
  try {
    const data = await fetchReddit(fetchReddit, url);
    const json = await data.json();
    dispatch(setSubredditData(json));
  }
  catch (err) {
    console.log('Error')
  }
}
