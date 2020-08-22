import fetchMarvel from '../../fetchMarvel';

export const fetchComics = (url) => async (dispatch) => {
  const comics = await fetchMarvel(url).then(res => res.data.data.results);
  dispatch({ type: 'comics:setComics', payload: { comics } });
}
