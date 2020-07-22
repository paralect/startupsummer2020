function updateSearchResultsWithAbouts(value) {
  return {
    type: 'searchResultsWithAbouts:set',
    payload: {
      value
    }
  };
}


export default updateSearchResultsWithAbouts;