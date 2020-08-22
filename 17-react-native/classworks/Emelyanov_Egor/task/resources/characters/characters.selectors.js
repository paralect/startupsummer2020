export const getCharacters = store => store.characters.list;

export const getFavouriteCharacters = store => store.characters.list.filter(character => character.isFavourite);

export const getCharacter = (store, id) => store.characters.list.find(character => character.id === id);
