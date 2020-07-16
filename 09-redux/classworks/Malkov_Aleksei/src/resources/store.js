import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const initialState = {};

const store = createStore(
    reducer,
    initialState,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    ),
);

if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(reducer);
    });
}

export default store;
