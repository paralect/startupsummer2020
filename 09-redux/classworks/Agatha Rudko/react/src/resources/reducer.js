import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'services/history.service';
import searchInput from './searchInput/searchInput.reducer';

const reducers = {
  searchInput,
};

const rootReducer = combineReducers({
  router: connectRouter(history),
  ...reducers,
});

export default rootReducer;
