import PropTypes from 'prop-types';

export default {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,
  count: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func
};
