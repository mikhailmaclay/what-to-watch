import PropTypes from 'prop-types';

export default {
  movies: PropTypes.arrayOf(PropTypes.object),
  isAuthorized: PropTypes.bool.isRequired,
  changeMovieStatus: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};
