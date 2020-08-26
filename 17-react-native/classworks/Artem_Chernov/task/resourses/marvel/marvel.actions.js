import { GET_CHARACTERS, GET_STORIES, SET_FAVOURITES, SET_STATUS } from './marvel.reducer';
import React from 'react';
import * as api from './marvel.api'

export const getCharacters = () => async (dispatch) => {
  dispatch({ type: SET_STATUS, payload: true })
  const { data } = await api.getCharacters();
  dispatch({ type: GET_CHARACTERS, payload: [ ...data.data.results ]  });
  dispatch({ type: SET_STATUS, payload: false })
};

export const getStories = (id) => async (dispatch) => {
  dispatch({ type: SET_STATUS, payload: true })
  const { data } = await api.getStories(id);
  dispatch({ type: GET_STORIES, payload: [ ...data.data.results ]  });
  dispatch({ type: SET_STATUS, payload: false })
};

export const setFavourites = (id) => async (dispatch) => {
  dispatch({ type: SET_FAVOURITES, payload: id });
};
