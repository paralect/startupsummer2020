const initialState = {
  searchResults: []
};

export default (state = initialState, action) => {
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
    default:
      return state;
  }
};