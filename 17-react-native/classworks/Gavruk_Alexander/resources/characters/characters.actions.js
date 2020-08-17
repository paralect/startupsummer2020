import fetchMarvel from '../../fetchMarvel';

export const fetchData = (url) => async (dispatch) => {
  const { data } = await fetchMarvel(url);
  const characters = data.data.results.map((character) => ({
    ...character,
    isFavourite: false,
  }));

  dispatch({ type: 'characters:setData', payload: { characters } });
}

export const changeIsFavourite = (id) => (dispatch) => {
  dispatch({ type: 'characters:changeIsFavourite', payload: { id } });
}
