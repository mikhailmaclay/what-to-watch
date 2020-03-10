import PropTypes from 'prop-types';

export default {
  specialMovie: PropTypes.object.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.array.isRequired,
  onGenreChange: PropTypes.func.isRequired
};
