export const getData = (state) => state.comics.data;
export const getError = (state) => state.comics.error;
export const getFetching = (state) => state.comics.fetching;

export const getChars = (state) => state.comics.characters;
export const getCharacter = (id) => (state) => state.comics.characters.find((c) => c.id === id); 

export const getFavorites = (state) => state.comics.favorites;
