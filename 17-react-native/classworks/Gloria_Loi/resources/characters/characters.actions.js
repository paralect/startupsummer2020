import { GET_ALL, TOGGLE_FAV, GET_COMICS } from './characters.constants';
import fetchMarvel from '../../fetchMarvel';

export const fetchCharacters = () => {
  return async (dispatch) => {
    const { data } = await fetchMarvel('/characters');

    const characters = data.data.results.map(
      ({ name, id, thumbnail, description }) => ({
        name,
        id,
        thumbnail,
        description,
        isFav: false,
      })
    );
    dispatch({
      type: GET_ALL,
      payload: {
        characters,
      },
    });
  };
};

export const toggleFav = (id) => {
  return async (dispatch) => {
    dispatch({
      type: TOGGLE_FAV,
      payload: {
        id,
      },
    });
  };
};

export const fetchComics = (id) => {
  return async (dispatch) => {
    const result = await fetchMarvel(`/characters/${id}/comics`);
    const comicsArray = result.data.data.results.map(
      ({ id, thumbnail, description }) => ({
        id,
        thumbnail,
        description,
      })
    );
    dispatch({
      type: GET_COMICS,
      payload: {
        comicsArray,
      },
    });
  };
};
