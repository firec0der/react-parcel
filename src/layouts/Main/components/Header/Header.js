// imports from vendors
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// imports from components
import { Svg } from '../../../../components';

// imports from styles
import styles from './Header.scss';

import GitHubSVG from '../../../../assets/github/github.svg';

export default class Header extends React.PureComponent {

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    return (
      <header className={classNames(styles.root, className)}>
        <div className="container">
          <Svg height="32px" svg={GitHubSVG} fill="white" />
        </div>
      </header>
    );
  }

}
