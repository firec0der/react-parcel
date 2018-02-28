// imports from vendors
import { createAction, createReducer } from 'redux-act';
import { put, takeEvery } from 'redux-saga/effects';

// imports from constants
import { ACTION_REQUEST, ACTION_SUCCESS, ACTION_ERROR } from '../../constants/redux';

const ACTION_ROOT = 'GITHUB/USER';

const startRequest = createAction(`${ACTION_ROOT}/${ACTION_REQUEST}`);
const requestSuccess = createAction(`${ACTION_ROOT}/${ACTION_SUCCESS}`);
const requestError = createAction(`${ACTION_ROOT}/${ACTION_ERROR}`);

const initialState = {
  isLoading: false,
  item: null,
  error: null,
};

export default createReducer({
  [startRequest]: ({ item }) => ({ isLoading: true, item, error: null }),
  [requestSuccess]: (_, item) => ({ isLoading: false, item, error: null }),
  [requestError]: ({ item }, { error }) => ({ isLoading: false, item, error }),
}, initialState);

function* performGithubUserFetching({ payload }) {
  try {
    // API call will be here
    yield put(requestSuccess(payload.username));
  } catch (error) {
    yield put(requestError(error));
  }
}

export const fetchGithubUser = startRequest;

export function* githubUserFetchingWatcher() {
  yield takeEvery(startRequest.getType(), performGithubUserFetching);
}
