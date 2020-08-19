const initState = {
  apiToken: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'clearToken':
      return { ...state, apiToken: null };
    case 'setToken':
      return { ...state, apiToken: action.payload.apiToken };
    default:
      return state;
  }
};
