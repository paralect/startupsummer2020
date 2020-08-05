//export const getCharacters = state => state.characters.list;

export const getCharacters = state => {
  return [...state.characters.list.filter(item => item.isFav), ...state.characters.list.filter(item => !item.isFav)];
}
