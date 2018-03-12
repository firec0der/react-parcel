// import from vendors
import PropTypes from 'prop-types';

export const matchShape = PropTypes.shape({
  isExact: PropTypes.bool.isRequired,
  params: PropTypes.object,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const historyShape = PropTypes.shape({
  push: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
});
