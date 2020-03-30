import PropTypes from 'prop-types';

export default {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  baseURL: PropTypes.string.isRequired,
  showNotification: PropTypes.func.isRequired,
  addReview: PropTypes.func.isRequired
};
