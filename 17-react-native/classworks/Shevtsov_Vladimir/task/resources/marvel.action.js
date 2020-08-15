import fetchMarvel from '../fetchMarvel';

export const FETCH_CHARACTER_COMICS_SUCCESS = 'FETCH_CHARACTER_COMICS_SUCCESS';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const TOGGLE_CHARACTER_FAVOURITE = 'TOGGLE_FAVOURITE';

const fetchCharacterComics = (id, data) => ({ type: FETCH_CHARACTER_COMICS_SUCCESS, payload: { id, data } });

export const fetchComics = (id, params) => (dispatch) => {
  fetchMarvel(`/characters/${id}/comics`, params)
    .then((res) => {
      dispatch(fetchCharacterComics(id, res));
    });
};

const fetchCharactersSuccess = (data) => ({ type: FETCH_CHARACTERS_SUCCESS, payload: data });

export const fetchCharacters = () => (dispatch) => {
  fetchMarvel('/characters')
    .then((res) => {
      const characters = res.map((char) => ({ ...char, favourite: false }));
      dispatch(fetchCharactersSuccess(characters));
    });
};

export const toggleFavourite = (id) => ({ type: TOGGLE_CHARACTER_FAVOURITE, payload: { id } });
