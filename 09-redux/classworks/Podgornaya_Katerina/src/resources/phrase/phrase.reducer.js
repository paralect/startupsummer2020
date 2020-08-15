import { PHRASE } from './phrase.action';

const initialState = {
  phrase: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PHRASE: {
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
