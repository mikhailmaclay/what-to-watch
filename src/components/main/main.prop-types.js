import PropTypes from 'prop-types';

export default {
  specialMovie: PropTypes.object.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  movies: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func,
};
