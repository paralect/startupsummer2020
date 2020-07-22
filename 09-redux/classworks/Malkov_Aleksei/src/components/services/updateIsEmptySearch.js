function updateIsEmptySearch(value) {
  return {
    type: 'isSearchEmpty:set',
    payload: {isSearchEmpty: value}
  };
}


export default updateIsEmptySearch;