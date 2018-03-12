// imports from vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// imports from types
import { matchShape, historyShape } from '../../types/router';
import { githubUserShape } from '../../types/github/user';

// imports from modules
import { fetchGithubUser } from '../../modules/github/user';

const mapDispatchToProps = {
  fetchGithubUser,
};

const mapStateToProps = ({ github }) => ({
  user: github.user,
});

class UserPage extends React.Component {

  static propTypes = {
    // router
    match: matchShape.isRequired,
    history: historyShape.isRequired,
    // action creators
    fetchGithubUser: PropTypes.func.isRequired,
    // data from the store
    user: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
      item: githubUserShape,
      // error: PropTypes.object,
    })
  };

  componentWillMount() {
    const { match, fetchGithubUser } = this.props;
    const username = match.params.username;
    fetchGithubUser({ username });
  }

  render() {
    return 'User page';
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
