// imports from vendors
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// imports from pages
import { AboutPage, HomePage, RepoPage, UserPage, UserReposPage } from './pages';

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
                <Route exact path="/" component={HomePage} />
                <Route exact path="/users/:user" component={UserPage} />
                <Route exact path="/users/:user/repos" component={UserReposPage} />
                <Route exact path="/users/:user/repos/:repo" component={RepoPage} />
                <Route path="/about" component={AboutPage} />
              </Switch>
            </main>
            <footer>Footer</footer>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }

}
