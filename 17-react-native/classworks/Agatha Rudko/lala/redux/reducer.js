const defaultState = {
  heroes: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'WRITE_HEROES':
      return {
        heroes: action.heroes
      };
    default:
      return state;
  }
}
