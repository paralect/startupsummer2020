import fetcher from "./fetcher";
import updateSearchResults from "./updateSearchResults";
import fetcherAbout from "./fetcherAbout";
import updateSearchResultsWithAbouts from "./updateSearchResultsWithAbouts";
import updateIsEmptySearch from "./updateIsEmptySearch";

export function getSubreddits(fetchReddit, value) {
  return async function(dispatch) {
    const searchs = await fetcher(fetchReddit, value);
    console.log(searchs);
    if (!searchs?.length) {
      dispatch(updateIsEmptySearch(true));
    } else {
      dispatch(updateIsEmptySearch(false));
      dispatch(updateSearchResults(searchs));
      searchs.forEach(async (searchObject) => {
        const subredditName = searchObject.data.display_name_prefixed;
        const about = await fetcherAbout(fetchReddit, subredditName);
        dispatch(updateSearchResultsWithAbouts(about.data));
      });
    }
    
  };
}

export default getSubreddits;