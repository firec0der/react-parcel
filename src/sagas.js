// imports from vendors
import { all } from 'redux-saga/effects';

import { githubUsersFetchingWatcher } from './modules/github/users';
import { githubReposFetchingWatcher } from './modules/github/repos';

export default function* rootSaga() {
  yield all([
    githubUsersFetchingWatcher(),
    githubReposFetchingWatcher(),
  ]);
}
