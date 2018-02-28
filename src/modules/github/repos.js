// imports from vendors
import { createAction, createReducer } from 'redux-act';
import { put, takeEvery } from 'redux-saga/effects';

// imports from constants
import { ACTION_REQUEST, ACTION_SUCCESS, ACTION_ERROR } from '../../constants/redux';

const ACTION_ROOT = 'GITHUB/REPOS';

const startRequest = createAction(`${ACTION_ROOT}/${ACTION_REQUEST}`);
const requestSuccess = createAction(`${ACTION_ROOT}/${ACTION_SUCCESS}`);
const requestError = createAction(`${ACTION_ROOT}/${ACTION_ERROR}`);

const initialState = {
  isLoading: false,
  items: [],
  error: null,
};

export default createReducer({
  [startRequest]: ({ items }) => ({ isLoading: true, items, error: null }),
  [requestSuccess]: (_, items) => ({ isLoading: false, items, error: null }),
  [requestError]: ({ items }, { error }) => ({ isLoading: false, items, error }),
}, initialState);

function* performGithubReposFetching() {
  try {
    // API call will be here
    yield put(requestSuccess());
  } catch (error) {
    yield put(requestError(error));
  }
}

export const fetchGithubRepos = startRequest;

export function* githubReposFetchingWatcher() {
  yield takeEvery(startRequest.getType(), performGithubReposFetching);
}
