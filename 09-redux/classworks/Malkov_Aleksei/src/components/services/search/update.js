export function updateIsEmptySearch(value) {
  return {
    type: 'isSearchEmpty:set',
    payload: {isSearchEmpty: value}
  };
}

export function updateSearchResults(array) {
  return {
    type: 'searchResults:set',
    payload: {
      searchResults: array
    }
  };
}

export function updateSearchResultsWithAbouts(value) {
  return {
    type: 'searchResultsWithAbouts:set',
    payload: {
      value
    }
  };
}