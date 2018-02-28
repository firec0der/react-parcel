// imports from vendors
import { all } from 'redux-saga/effects';

import { githubUserFetchingWatcher } from './modules/github/users';
import { githubReposFetchingWatcher } from './modules/github/repos';

export default function* rootSaga() {
  yield all([
    githubUserFetchingWatcher(),
    githubReposFetchingWatcher(),
  ]);
}
