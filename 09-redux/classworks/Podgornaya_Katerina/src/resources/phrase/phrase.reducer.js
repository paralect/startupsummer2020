const initialState = {
  phrase: '',
};

const phrases = (state = initialState, action) => {
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

export default phrases;