export const favouriteCharacters = (favouriteCharacters) => (dispatch) => {
  dispatch({ type: 'characters:setFavourites', payload: { favouriteCharacters } });
}

export const fetchData = (fetchMarvel, url) => async (dispatch) => {
  const characters = await fetchMarvel(url).then(res => res.data.results);
  dispatch({ type: 'characters:setData', payload: { characters } });
}
