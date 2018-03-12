// imports from vendors
import React from 'react';
import PropTypes from 'prop-types';
import ReactSvgInline from 'react-svg-inline';
import classNames from 'classnames';

// imports from styles
import styles from './Svg.scss';

export default class Svg extends React.PureComponent {

  static propTypes = {
    // TODO: add propTypes from 'react-svg-inline' for correct IDE autocomplete
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    className: PropTypes.string,
  };

  static defaultProps = {
    component: 'div',
    className: '',
  };

  render() {
    const { className } = this.props;

    const props = {
      ...this.props,
      className: classNames(styles.root, className),
    };

    return <ReactSvgInline {...props} />;
  }

}
