import PropTypes from 'prop-types';

export default {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  background: PropTypes.arrayOf(PropTypes.string).isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  isInMyList: PropTypes.bool.isRequired,
  changeMovieStatus: PropTypes.func.isRequired
};

