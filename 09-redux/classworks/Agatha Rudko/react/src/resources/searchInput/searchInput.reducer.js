const defaultState = {
  searchInput: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_SEARCH_INPUT':
      return {
        searchInput: action.input
      };
    default:
      return state;
  }
}
