import PropTypes from 'prop-types';

export default {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onMovieCardMouseOver: PropTypes.func.isRequired
};
