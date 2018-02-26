// imports from vendors
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// imports from pages
import { About, Home } from './pages';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <header>Header</header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </main>
          <footer>Footer</footer>
        </React.Fragment>
      </BrowserRouter>
    );
  }

}
