import PropTypes from 'prop-types';

export default {
  genres: PropTypes.arrayOf(PropTypes.string),
  currentGenre: PropTypes.string,
  changeGenre: PropTypes.func.isRequired
};
