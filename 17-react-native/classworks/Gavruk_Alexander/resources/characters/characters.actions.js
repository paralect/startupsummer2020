export const fetchData = (fetchMarvel, url) => async (dispatch) => {
  const { data } = await fetchMarvel(url);
  const characters = data.data.results.map((characters) => ({
    ...characters,
    isFavourite: false,
  }));

  dispatch({ type: 'characters:setData', payload: { characters } });
}

export const changeIsFavourite = (id) => (dispatch) => {
  dispatch({ type: 'characters:changeIsFavourite', payload: { id } });
}

export const fetchComics = (fetchMarvel, url) => async (dispatch) => {
  const comics = await fetchMarvel(url).then(res => res.data.data.results);
  dispatch({ type: 'characters:setComics', payload: { comics } });
}
