// imports from vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image } from 'react-bootstrap';

// imports from types
import { matchShape, historyShape } from '../../types/router';
import { githubUserShape } from '../../types/github/user';

// imports from modules
import { fetchGithubUser } from '../../modules/github/user';

// imports from components
import { PersonInfo } from './components';

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
    const { user } = this.props;

    if (user.error) {
      // TODO: render error
      return null;
    }

    if (user.isLoading || !user.item) {
      // TODO: render loader
      return null;
    }

    console.log(user);

    return (
      <div>
        <Grid>
          <Row>
            <Col md={3}>
              <PersonInfo
                avatarUrl={user.item.avatar_url}
                username={user.item.login}
                fullname={user.item.name}
              />
            </Col>
            <Col md={9}>

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
