import { createAction } from 'redux-actions';
import fetchMarvel from '../../fetchMarvel';

export const SET_CHARACTERS = 'SET_CHARACTERS';
export const SET_FAVOURITE_CHARACTER = 'SET_FAVOURITE_CHARACTER';
export const SET_ADDITIONAL_CHARACTER_INFO = 'SET_ADDITIONAL_CHARACTER_INFO';

export const setCharacters = createAction(SET_CHARACTERS);

export const setFavouriteCharacter = createAction(SET_FAVOURITE_CHARACTER);

export const setAdditionalCharacterInfo = createAction(SET_ADDITIONAL_CHARACTER_INFO);

export const fetchCharacters = () => async dispatch => {
  try {
    const { data } = await fetchMarvel('/characters');
    const characters = data.data.results.map(character => ({ ...character, isFavourite: false }));
    dispatch(setCharacters(characters));
  } catch (err) {
    console.log('Can\'t get characters data');
  }
}

export const fetchComics = (id) => async dispatch => {
  try {
    const { data } = await fetchMarvel(`/characters/${id}/comics`);
    const characterComics = { comicsArray: data.data.results, id };
    dispatch(setAdditionalCharacterInfo(characterComics));
  } catch (err) {
    console.log('Can\'t get comics data');
  }
}

