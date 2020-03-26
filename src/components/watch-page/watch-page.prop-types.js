import PropTypes from 'prop-types';

export default {
  name: PropTypes.string.isRequired,
  video: PropTypes.string,
  background: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired // withRouter
};
