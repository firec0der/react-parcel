// imports from vendors
import React from 'react';

// imports from components
import { Footer } from './components';

// imports from styles
import classNames from './Main.scss';

export default class MainLayout extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div className={classNames.root}>
        <main className={classNames.content}>
          { children }
        </main>
        <Footer />
      </div>
    );
  }

}
