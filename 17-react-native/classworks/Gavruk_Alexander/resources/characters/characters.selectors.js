export function getCharacters({ characterReducer }) {
  return characterReducer.characters;
}

export const getIsFavourite = (id) => ({ characterReducer }) => {
  return characterReducer.characters.find((character) => character.id === id).isFavourite;
}

export function getFavouriteCharacters({ characterReducer }) {
  return characterReducer.characters.filter((character) => character.isFavourite);
}
