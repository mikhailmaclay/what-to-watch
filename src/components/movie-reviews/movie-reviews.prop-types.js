import PropTypes from 'prop-types';

export default {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    fullName: PropTypes.string.isRequired
  })).isRequired
};
