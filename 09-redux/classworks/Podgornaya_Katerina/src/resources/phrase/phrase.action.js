const phraseAction = (phrase) => (dispatch) => {
  dispatch({
    type: 'phrase:set',
    payload: phrase,
  });
};

export default phraseAction;