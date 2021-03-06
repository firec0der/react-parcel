// import from vendors
import PropTypes from 'prop-types';

export const githubUserShape = PropTypes.shape({
  login: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  avatar_url: PropTypes.string.isRequired,
  // gravatar_id: "",
  url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  followers_url: PropTypes.string.isRequired,
  following_url: PropTypes.string.isRequired,
  gists_url: PropTypes.string.isRequired,
  starred_url: PropTypes.string.isRequired,
  subscriptions_url: PropTypes.string.isRequired,
  organizations_url: PropTypes.string.isRequired,
  repos_url: PropTypes.string.isRequired,
  events_url: PropTypes.string.isRequired,
  received_events_url: PropTypes.string.isRequired,
  // type: "User", ?
  site_admin: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string,
  // blog: "",
  location: PropTypes.string.isRequired,
  email: PropTypes.string,
  // hireable: null,
  bio: PropTypes.string,
  public_repos: PropTypes.number.isRequired,
  public_gists: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
});
