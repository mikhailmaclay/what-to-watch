import PropTypes from 'prop-types';

export default {
  genres: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired,
  history: PropTypes.shape({ // withRouter
    push: PropTypes.func.isRequired
  })
};
