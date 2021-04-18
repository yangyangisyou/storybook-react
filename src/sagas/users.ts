import {
  all, call, put, takeEvery
} from 'redux-saga/effects';
import {
  GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED
} from '../config/types';

import { fetchData } from '../util/apiUtil';

interface responseUsers {
    users: [],
}

function* fetchUsers() {
  try {
    const users: responseUsers = yield call(() => fetchData(process.env.REACT_APP_USER_API_URL));
    yield put({ type: GET_USERS_SUCCESS, users: users });
  } catch (exception) {
    yield put({ type: GET_USERS_FAILED, message: exception.message });
  }
}

function* userSaga() {
  yield all([
    takeEvery(GET_USERS_REQUEST, fetchUsers),
  ]);
}

export default userSaga;
