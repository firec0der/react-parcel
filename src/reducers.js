// imports from vendors
import { combineReducers } from 'redux';

import githubUsersReducer from './modules/github/users';
import githubReposReducer from './modules/github/repos';

export default combineReducers({
  github: combineReducers({
    users: githubUsersReducer,
    repos: githubReposReducer,
  }),
});
