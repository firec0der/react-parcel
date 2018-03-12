// imports from vendors
import React from 'react';

// imports from components
import { Svg } from '../../../../components';

// imports from styles
import styles from './Header.scss';

import GitHubSVG from '../../../../assets/github/github.svg';

export default class Header extends React.PureComponent {

  render() {
    return (
      <header className={styles.root}>
        <div className="container">
          <Svg height="32px" svg={GitHubSVG} fill="white" />
        </div>
      </header>
    );
  }

}
