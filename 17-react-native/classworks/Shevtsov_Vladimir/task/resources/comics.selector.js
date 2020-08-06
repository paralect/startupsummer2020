import { uniqBy } from 'lodash';

export const getData = (state) => state.comics.data;
export const getError = (state) => state.comics.error;
export const getFetching = (state) => state.comics.fetching;

export const getChars = (state) => {
  const data = state.comics.data;
  const results = data?.data?.data?.results ?? [];

  const chars = uniqBy(results, "id").map((obj) => (
    {
      id: obj.id,
      name: obj.name,
      thumbnail: `${obj.thumbnail.path}.${obj.thumbnail.extension}`,
      description: obj.description,
      comics: obj.comics,
    }
  ));

  return chars;
};

export const getFavorites = (state) => state.comics.favorites;
