export const getAllCharacters = (state) => {
  return [...state.characters.characters];
};

export const getFavouriteCharacters = (state) => {
  return [...state.characters.characters.filter((item) => item.isFav)];
};

export const getComics = (state) => {
  return [...state.characters.comicsArray];
};
