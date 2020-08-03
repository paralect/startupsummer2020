import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const initialState = {};

const store = createStore(
    reducer,
    initialState,
      applyMiddleware(compose(
            thunk,
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
        )),
);

export default store;
