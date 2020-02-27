import PropTypes from 'prop-types';

export default {
  score: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  directors: PropTypes.arrayOf(PropTypes.string).isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired
};
