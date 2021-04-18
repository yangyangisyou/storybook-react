import { all } from 'redux-saga/effects';
import userSaga from './users';

function* rootSaga() {
  yield all([userSaga()]);
}

export default rootSaga;
