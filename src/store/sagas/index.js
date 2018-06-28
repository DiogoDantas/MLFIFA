import { all, takeLatest } from 'redux-saga/effects';
import { fetchPlayersRequest } from './players';

export default function* rootSaga(){
    return yield all([
        takeLatest('FETCH_PLAYERS_REQUEST', fetchPlayersRequest),
    ])
}