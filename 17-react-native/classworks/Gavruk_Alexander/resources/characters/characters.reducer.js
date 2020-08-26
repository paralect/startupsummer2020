const initialState = {
  characters: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'characters:setData':
      return {
        ...state,
        characters: action.payload.characters,
      };

    case 'characters:setComics':
      return {
        ...state,
        comics: action.payload.comics,
      };

    case 'characters:changeIsFavourite':
      return {
        ...state,
        characters: state.characters.map((character) => {
          const result = character.id === action.payload.id
            ? {
              ...character,
              isFavourite: !character.isFavourite
            }
            : character
          console.log('is favourite in reducer: ', result.isFavourite);
          return result;
        }),
      };

    default:
      return state;
  }
}
