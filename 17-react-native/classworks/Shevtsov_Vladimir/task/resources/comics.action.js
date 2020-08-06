import fetchMarvel from '../fetchMarvel';

export const FETCH_COMICS_START = 'FETCH_COMICS_START';
export const FETCH_COMICS_SUCCESS = 'FETCH_COMICS_SUCCESS';
export const FETCH_COMICS_ERROR = 'FETCH_COMICS_ERROR';

const fetchComicsStart = () => ({ type: FETCH_COMICS_START });
const fetchComicsSuccess = (data) => ({ type: FETCH_COMICS_SUCCESS, payload: data });
const fetchComicsError = (err) => ({ type: FETCH_COMICS_ERROR, payload: err });

export const fetchComics = (url, params) => (dispatch) => {
  dispatch(fetchComicsStart());
  fetchMarvel(url, params)
    .then((res) => dispatch(fetchComicsSuccess(res)))
    .catch((err) => dispatch(fetchComicsError(err)));
};
