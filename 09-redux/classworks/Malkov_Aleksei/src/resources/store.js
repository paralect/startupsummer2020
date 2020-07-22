import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import thunker from 'components/services/thunker';

const store = createStore(
    reducer,
    compose (applyMiddleware(thunker),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,)
);

if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(reducer);
    });
}

export default store;
