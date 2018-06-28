import { combineReducers } from 'redux';
import players from './players';
import page from './page';

export default combineReducers({
    players,
    page,
});