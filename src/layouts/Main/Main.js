// imports from vendors
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// imports from components
import { Footer, Header } from './components';

// imports from styles
import styles from './Main.scss';

export default class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    const { children } = this.props;

    return (
      <div className={styles.root}>
        <Header className={styles.header} />
        <main className={classNames(styles.content, 'container')}>
          { children }
        </main>
        <Footer />
      </div>
    );
  }

}
