import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from './thunk';
import { routerMiddleware } from 'connected-react-router';
import logger from "./logger";
import history from 'services/history.service';

import reducer from './reducer';

const initialState = {};

const thunk = store => next => action => {
  if (typeof action  === 'object') {
    return next(action);
  }else {
    return action(store.dispatch)
  }
}

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(logger, routerMiddleware(history), thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  ),
);

if (module.hot) {
  module.hot.accept('./reducer', () => {
    store.replaceReducer(reducer);
  });
}

export default store;
