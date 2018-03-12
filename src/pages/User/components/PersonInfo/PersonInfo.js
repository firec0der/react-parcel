// imports from vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

// imports from styles
import styles from './PersonInfo.scss';

export default class PersonInfo extends React.PureComponent {

  static propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    fullname: PropTypes.string,
    username: PropTypes.string.isRequired,
  };

  static defaultProps = {
    fullname: '',
  };

  render() {
    const { avatarUrl, fullname, username } = this.props;

    return (
      <div className={styles.root}>
        <Image responsive rounded src={avatarUrl} />

        <div className={styles.names}>
          { fullname.length > 0 && (
            <span className={styles.fullname}>{ fullname }</span>
          ) }
          <span className={styles.username}>{ username }</span>
        </div>
      </div>
    );
  }

}
