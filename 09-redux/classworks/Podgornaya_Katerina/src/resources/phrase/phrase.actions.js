const PHRASE = 'PHRASE';

const setPhrase = (phrase) => (dispatch) => {
  dispatch({
    type: PHRASE,
    payload: phrase,
  });
};

export {
  PHRASE,
  setPhrase,
};
