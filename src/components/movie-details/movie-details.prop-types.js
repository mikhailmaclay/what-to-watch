import PropTypes from 'prop-types';

export default {
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
};
