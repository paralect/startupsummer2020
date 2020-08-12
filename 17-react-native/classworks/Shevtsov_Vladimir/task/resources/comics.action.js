import fetchMarvel from '../fetchMarvel';

export const FETCH_COMICS_START = 'FETCH_COMICS_START';
export const FETCH_COMICS_SUCCESS = 'FETCH_COMICS_SUCCESS';
export const FETCH_COMICS_ERROR = 'FETCH_COMICS_ERROR';
export const ADD_CHARACTER_TO_FAVORITES = 'ADD_CHARACTER_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

const fetchComicsStart = () => ({ type: FETCH_COMICS_START });
const fetchComicsSuccess = (data) => ({ type: FETCH_COMICS_SUCCESS, payload: data });
const fetchComicsError = (err) => ({ type: FETCH_COMICS_ERROR, payload: err });

export const fetchComics = (url, params) => (dispatch) => {
  dispatch(fetchComicsStart());
  fetchMarvel(url, params)
    .then((res) => dispatch(fetchComicsSuccess(res)))
    .catch((err) => dispatch(fetchComicsError(err)));
};

const fetchCharactersStart = () => ({ type: FETCH_CHARACTERS_START });
const fetchCharactersSuccess = (data) => ({ type: FETCH_CHARACTERS_SUCCESS, payload: data });
const fetchCharactersError = (err) => ({ type: FETCH_CHARACTERS_ERROR, payload: err });


export const fetchCharacters = () => (dispatch) => {
  dispatch(fetchCharactersStart());
  fetchMarvel('/characters')
    .then((res) => dispatch(fetchCharactersSuccess(res)))
    .catch((err) => dispatch(fetchCharactersError(err)));
};

export const addToFavorites = (obj) => ({ type: ADD_CHARACTER_TO_FAVORITES, payload: obj });
export const removeFromFavorites = (id) => ({ type: REMOVE_FROM_FAVORITES, payload: id });
