import PropTypes from 'prop-types';

export default {
  movies: PropTypes.arrayOf(PropTypes.object),
  showNotification: PropTypes.func.isRequired,
  addReview: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};
