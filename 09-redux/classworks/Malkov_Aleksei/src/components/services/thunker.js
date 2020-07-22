function thunker() {
  return function({ dispatch, state}) {
    return function(next) {
      return function(action) {
        if (typeof action === 'function') {
          return action(dispatch, state);
        } else return next(action);
      }
    }
  }
}

export default thunker;