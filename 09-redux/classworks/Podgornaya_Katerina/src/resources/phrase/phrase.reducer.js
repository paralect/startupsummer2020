const initialState = {
  phrase: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'phrase:set': {
      return {
        ...state,
        phrase: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};