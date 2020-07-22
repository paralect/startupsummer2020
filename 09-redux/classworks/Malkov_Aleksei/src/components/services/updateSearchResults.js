function updateSearchResults(array) {
  return {
    type: 'searchResults:set',
    payload: {
      searchResults: array
    }
  };
}


export default updateSearchResults;