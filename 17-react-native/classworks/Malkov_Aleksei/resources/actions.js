import fetchMarvel from '../fetchMarvel';

const AVENGERS_ID = '22547';

export const getAllMarvels = () => async (dispatch) => {
  const { data } = await fetchMarvel(`/characters?series=${AVENGERS_ID}`);
  dispatch({ type: 'all:set', payload: { all: data.data.results } });
};

export const getComicsForMarvel = (marvelId) => async (dispatch) => {
  const { data } = await fetchMarvel(`/characters/${marvelId}/comics`);
  const marvelComics = {
    _id: marvelId,
    comics: data.data.results,
  };
  dispatch({ type: 'marvelComics:add', payload: { marvelComics } });
};

export const makeFavourite = (marvel) => async (dispatch) => {
  switch (typeof marvel) {
    case 'object':
      dispatch({ type: 'favourites:add', payload: { marvel } });
      break;
    case 'number':
      dispatch({ type: 'favourites:delete', payload: { id: marvel } });
      break;
    default:
      break;
  }
};

export const unfavourite = (id) => async (dispatch) => {
  dispatch({ type: 'favourites:delete', payload: { id } });
};