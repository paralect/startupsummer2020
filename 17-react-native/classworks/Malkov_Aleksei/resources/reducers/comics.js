export default function comics(state = { list: [] }, action) {
    switch (action.type) {
      case 'marvelComics:add':
        return {
          ...state,
          list: action.payload.marvelComics,
        };
      default:
        return state;
    }
  }