const PHRASE = 'PHRASE';

const phraseAction = (phrase) => (dispatch) => {
  dispatch({
    type: PHRASE,
    payload: phrase,
  });
};

export {
  PHRASE,
  phraseAction,
};
