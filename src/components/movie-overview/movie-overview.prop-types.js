import PropTypes from 'prop-types';

export default {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  directors: PropTypes.arrayOf(PropTypes.string).isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired
};
