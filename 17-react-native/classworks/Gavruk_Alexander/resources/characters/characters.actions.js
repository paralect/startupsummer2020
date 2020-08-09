export const favouriteCharacterIds = (favouriteCharacterIds) => (dispatch) => {
  dispatch({ type: 'characters:setFavourites', payload: { favouriteCharacterIds } });
}

export const fetchData = (fetchMarvel, url) => async (dispatch) => {
  const characters = await fetchMarvel(url).then(res => res.data.data.results);
  dispatch({ type: 'characters:setData', payload: { characters } });
}

export const fetchComics = (fetchMarvel, url) => async (dispatch) => {
  const comics = await fetchMarvel(url).then(res => res.data.data.results);
  dispatch({ type: 'characters:setComics', payload: { comics } });
}
