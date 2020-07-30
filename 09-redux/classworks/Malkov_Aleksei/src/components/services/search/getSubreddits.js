import { updateSearchResults, updateSearchResultsWithAbouts, updateIsEmptySearch } from "./update";
import { fetchAbout, fetchSearch } from "../request/fetch";

export function getSubreddits(fetchReddit, value) {
  return async function(dispatch) {
    const searchs = await fetchSearch(fetchReddit, value);

    if (!searchs?.length) {
      dispatch(updateIsEmptySearch(true));
    } else {
      dispatch(updateIsEmptySearch(false));
      dispatch(updateSearchResults(searchs));
      searchs.forEach(async (searchObject) => {
        const subredditName = searchObject.data.display_name_prefixed;
        const about = await fetchAbout(fetchReddit, subredditName);
        dispatch(updateSearchResultsWithAbouts(about.data));
      });
    }
    
  };
}

export default getSubreddits;