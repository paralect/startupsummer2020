import { FETCH_COMICS_START, FETCH_COMICS_SUCCESS, FETCH_COMICS_ERROR } from './comics.action';

export const comics = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMICS_START:
      return { ...state, fetching: true };
    case FETCH_COMICS_SUCCESS:
      return { ...state, data: action.payload, fetching: false };
    case FETCH_COMICS_ERROR:
      return { ...state, error: action.payload, fetching: false };
    default: return state;
  }
}
