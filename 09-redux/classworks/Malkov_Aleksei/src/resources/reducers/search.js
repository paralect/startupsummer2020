export default function seatch(state = { 
  search: '',
  searchResults: [],
  searchResultsWithAbouts: [],
  isSearchEmpty: false,
 }, action) {
  switch (action.type) {
    case 'search:set':
      return {
        ...state,
        search: action.payload.search,
      };
    case 'isSearchEmpty:set':
      return {
        ...state,
        isSearchEmpty: action.payload.isSearchEmpty,
      };
    case 'searchResults:set':
      return {
        ...state,
        searchResults: action.payload.searchResults,
      };
    case 'searchResultsWithAbouts:set':
      const newAbouts = [...state.searchResultsWithAbouts, action.payload.value];
      return {
        ...state,
        searchResultsWithAbouts: newAbouts,
      };
    default:
      return state;
  }
}