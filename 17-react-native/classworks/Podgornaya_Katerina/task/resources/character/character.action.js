const FETCH_CHARACTERS = 'fetchCharacters';

const fetchCharacters = ({
  fetchMarvel
}) => async (dispatch) => {
  const { data } = await fetchMarvel(`/characters`);

  const characters = 

  dispatch({
    type: FETCH_CHARACTERS,
    payload: data.data.results.map(item => ({
      ...item,
      isFav: false
      })
    ),
  });
  return data.data.results.map(item => ({
    ...item,
    isFav: false
    })
  );
};

export {
  FETCH_CHARACTERS,
  fetchCharacters,
};
