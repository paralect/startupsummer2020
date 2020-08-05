const initialState = {characters: []}

const reducer = (state = initialState, {type, character}) => {
  switch (type) {
    case 'SET_TO_FAVORITES':
      console.log("jfhrwejfjhr")
      console.log(state)
      return {
        ...state,
        characters: [...state.characters, character]
      };
    case 'DELETE_FROM_FAVORITES':
      return {
        ...state,
        character: action.character,
      };
    default:
      return state;
  }
};

export default reducer;