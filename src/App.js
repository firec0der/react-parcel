// imports from vendors
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// imports from pages
import { AboutPage, HomePage, RepoPage, UserPage, UserReposPage } from './pages';

// imports from layouts
import { MainLayout } from './layouts';

import store from './store';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/users/:username" component={UserPage} />
              <Route exact path="/users/:username/repos" component={UserReposPage} />
              <Route exact path="/users/:username/repos/:repo" component={RepoPage} />
              <Route path="/about" component={AboutPage} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    );
  }

}
