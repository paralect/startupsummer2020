import fetchMarvel from '../fetchMarvel';

export const getAllMarvels = () => async (dispatch) => {
  const { data } = await fetchMarvel('/characters');
  console.log(data.data.results);
  dispatch({ type: 'all:set', payload: { all: data.data.results } });
};

export const getComicsForMarvel = (marvelId) => async (dispatch) => {
  const { data } = await fetchMarvel(`/characters/${marvelId}/comics`);
  console.log(data.data.results);
  const marvelComics = {
    _id: marvelId,
    comics: data.data.results,
  };
  dispatch({ type: 'marvelComics:add', payload: { marvelComics } });
};