import PropTypes from 'prop-types';

export default {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isAuthorized: PropTypes.bool.isRequired
};
