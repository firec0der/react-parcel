// imports from vendors
import React from 'react';
import classNames from 'classnames';

// imports from components
import { Footer, Header } from './components';

// imports from styles
import styles from './Main.scss';

export default class MainLayout extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div className={styles.root}>
        <Header />
        <main className={classNames(styles.content, 'container')}>
          { children }
        </main>
        <Footer />
      </div>
    );
  }

}
