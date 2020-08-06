export const getCharacters = state => {
  return [...state.characters.list.filter(item => item.isFav), ...state.characters.list.filter(item => !item.isFav)];
}

export const getFavouriteCharacters = state => {
  return [...state.characters.list.filter(item => item.isFav)];
}

export const getCharacter = ( state, id ) => {
  return state.characters.list.find( item => item.id === id );
}
