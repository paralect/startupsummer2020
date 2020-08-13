export function getCharacters({ marvel }) {
  return marvel.characters;
}

export function getComics({ marvel }) {
  return marvel.comics;
}

export function getFavouriteCharacterIds({ marvel }) {
  return marvel.favouriteCharacterIds;
}

export const getIsFavourite = (id) => ({ marvel }) => {
  return marvel.characters.find((character) => character.id === id).isFavourite;
}
