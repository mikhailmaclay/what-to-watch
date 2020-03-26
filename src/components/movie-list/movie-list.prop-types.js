import PropTypes from 'prop-types';

export default {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,
  withCounter: PropTypes.shape({
    renderedMovieCards: PropTypes.exact({
      value: PropTypes.number,
      increment: PropTypes.func,
      decrement: PropTypes.func,
      set: PropTypes.func
    })
  })
};
