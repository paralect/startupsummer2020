export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS"

const initState = {
  searchResults: null,
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
};