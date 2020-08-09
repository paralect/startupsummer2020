import { combineReducers } from 'redux';
import marvels from './marvels';
import comics from './comics';

export default combineReducers({
    marvels,
    comics
});