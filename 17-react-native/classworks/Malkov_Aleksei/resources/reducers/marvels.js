export default function marvels(state = { all: [], favourites: [], currMarvelId: null }, action) {
    switch (action.type) {
      case 'all:set':
        return {
          ...state,
          all: action.payload.all,
        };
      case 'favourites:add':
        return {
          ...state,
          favourites: [...state.favourites, action.payload.marvel],
        };
      case 'currMarvelId:set':
        return {
          ...state,
          currMarvelId: action.payload.currMarvelId,
        };
      default:
        return state;
    }
  }