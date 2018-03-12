// imports from vendors
import { createAction, createReducer } from 'redux-act';
import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// imports from constants
import { ACTION_REQUEST, ACTION_SUCCESS, ACTION_ERROR } from '../../constants/redux';
import { GITHUB_API_BASE } from '../../constants/github';

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

const fetchRequest = (payload) => new Promise((resolve, reject) => {
  const url = `${GITHUB_API_BASE}/users/${payload.username}`;
  axios
    .get(url)
    .then((response) => resolve(response.data))
    .catch(reject);
});

function* performGithubUserFetching({ payload }) {
  try {
    const data = yield call(fetchRequest, payload);
    yield put(requestSuccess(data));
  } catch (error) {
    yield put(requestError(error));
  }
}

export const fetchGithubUser = startRequest;

export function* githubUserFetchingWatcher() {
  yield takeEvery(startRequest.getType(), performGithubUserFetching);
}
