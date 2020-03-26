import PropTypes from 'prop-types';

export default {
  movies: PropTypes.arrayOf(PropTypes.object),
  changeMovieStatus: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};
