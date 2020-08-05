export const addSearchInput = (data) => {
  return { type: 'ADD_SEARCH_INPUT', searchInput: { ...data } };
};
