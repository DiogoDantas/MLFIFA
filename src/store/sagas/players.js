import api from '../../services/api';
import { call, put } from 'redux-saga/effects';
import { fetchPlayersSuccess } from '../actions/players'

export function* fetchPlayersRequest(action) {
    const response = yield call(api.get, `/players/?page=${action.payload.page}`);
    yield put(fetchPlayersSuccess(response.data.results));
}