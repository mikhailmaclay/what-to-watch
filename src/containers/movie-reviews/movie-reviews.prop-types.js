import PropTypes from 'prop-types';

export default {
  movieID: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object),
  loadReviews: PropTypes.func.isRequired
};
