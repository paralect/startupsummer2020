import React from 'react';
import fetchMarvel from '../../fetchMarvel';

export const getCharacters = () => {
  return fetchMarvel('/characters');
};

export const getStories = async (id) => {
  return fetchMarvel(`/characters/${id}/comics`);
};
