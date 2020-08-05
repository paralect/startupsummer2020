const initialState = {
  characters: [],
  favouriteCharacters: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'characters:setData':
      return {
        ...state,
        characters: action.payload.characters,
      };

    case 'characters:setFavourites':
      return {
        ...state,
        favouriteCharacters: action.payload.favouriteCharacters,
      };

    default:
      return state;
  }
}
