import { PHRASE } from './phrase.actions';

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
