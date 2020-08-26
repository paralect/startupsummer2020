export default function comics(state = { list: [] }, action) {
    switch (action.type) {
      case 'marvelComics:add':
        return {
          ...state,
          list: [
            ...state.list,
            {
              _id: action.payload.marvelComics._id,
              list: action.payload.marvelComics.comics,
            }
          ],
        };
      default:
        return state;
    }
  }