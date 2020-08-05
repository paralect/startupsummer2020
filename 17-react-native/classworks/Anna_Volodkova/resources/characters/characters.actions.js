import { FETCH_CHARACTERS, SWITCH_FAVOURITE } from './characters.types';
import fetchMarvel from '../../fetchMarvel';

export function fetchCharacters() {
  return async (dispatch) => {
    const { data } = await fetchMarvel('/characters');

    const characters = data.data.results.map(item => ({
        ...item,
        isFav: false
      })
    )

    dispatch({
      type: FETCH_CHARACTERS,
      payload: {
        characters,
      },
    });
  }
}

export function switchFavourite(id) {
  return async (dispatch) => {
    dispatch({
      type: SWITCH_FAVOURITE,
      payload: {
        id,
      }
    });
  }
}
