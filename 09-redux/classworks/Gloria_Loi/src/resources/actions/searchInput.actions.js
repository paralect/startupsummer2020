export const handleChange = (value) => async (dispatch) => {
  dispatch({ type: 'CHANGE_INPUT_STRING', inputString: value });
};
