const initialState = {
  comics: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'characters:setComics':
      return {
        ...state,
        comics: action.payload.comics,
      };

    default:
      return state;
  }
}
