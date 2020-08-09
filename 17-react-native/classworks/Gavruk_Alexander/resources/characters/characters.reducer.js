const initialState = {
  characters: [],
  favouriteCharacterIds: [],
  comics: [],
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
        favouriteCharacterIds: action.payload.favouriteCharacterIds,
      };

    case 'characters:setComics':
      return {
        ...state,
        comics: action.payload.comics,
      };

    default:
      return state;
  }
}
