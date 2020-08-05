import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

let composeEnhancers = compose;

export default () => {
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  return {
    store,
  };
};