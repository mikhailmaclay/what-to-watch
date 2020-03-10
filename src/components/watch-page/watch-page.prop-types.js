import PropTypes from 'prop-types';

export default {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  preview: PropTypes.string,
  background: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired // withRouter
};
