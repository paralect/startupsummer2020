export const getCharacters = (state) => state.marvel.characters;
export const getCharacter = (id) => (state) => state.marvel.characters.find((c) => c.id === id);
export const getFavourites = (state) => state.marvel.characters.filter((c) => c.favourite === true);
