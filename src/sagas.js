// imports from vendors
import { all } from 'redux-saga/effects';

import { githubUserFetchingWatcher } from './modules/github/users';

export default function* rootSaga() {
  yield all([
    githubUserFetchingWatcher(),
  ]);
}
