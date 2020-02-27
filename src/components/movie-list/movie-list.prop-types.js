import PropTypes from 'prop-types';

export default {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,
  renderedMovieCards: PropTypes.number, // withCounter
  incrementRenderedMovieCards: PropTypes.func, // withCounter
};
