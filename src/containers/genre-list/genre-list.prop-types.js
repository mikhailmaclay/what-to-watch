import PropTypes from 'prop-types';

export default {
  currentGenre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  changeGenre: PropTypes.func.isRequired
};
