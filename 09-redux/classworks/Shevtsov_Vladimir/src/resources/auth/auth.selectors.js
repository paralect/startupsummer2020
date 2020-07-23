export const getToken = (store) => store.auth.apiToken;
export const getIsLoggedIn = (store) => store.auth.apiToken !== null;
