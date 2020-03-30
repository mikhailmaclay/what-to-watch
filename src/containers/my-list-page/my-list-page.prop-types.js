import PropTypes from 'prop-types';

export default {
  movies: PropTypes.arrayOf(PropTypes.object),
  loadMyList: PropTypes.func.isRequired
};
