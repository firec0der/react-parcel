// imports from vendors
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// imports from pages
import { About, Home, Repo, User, UserRepos } from './pages';

import store from './store';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <header>Header</header>
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users/:user" component={User} />
                <Route exact path="/users/:user/repos" component={UserRepos} />
                <Route exact path="/users/:user/repos/:repo" component={Repo} />
                <Route path="/about" component={About} />
              </Switch>
            </main>
            <footer>Footer</footer>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }

}
