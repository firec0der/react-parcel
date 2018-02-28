// imports from vendors
import { combineReducers } from 'redux';

import githubUsersReducer from './modules/github/users';

export default combineReducers({
  github: combineReducers({
    users: githubUsersReducer,
  }),
});
