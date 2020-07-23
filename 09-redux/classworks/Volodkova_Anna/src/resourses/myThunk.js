export default (store) => (next) => (action) => {
  if (typeof action === 'function') {
    action(store.dispatch);
  } else {
    next(action);
  }
}
