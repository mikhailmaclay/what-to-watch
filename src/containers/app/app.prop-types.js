import PropTypes from 'prop-types';

export default {
  movies: PropTypes.array,
  loadMovies: PropTypes.func.isRequired,
  checkAuthorization: PropTypes.func.isRequired
};
