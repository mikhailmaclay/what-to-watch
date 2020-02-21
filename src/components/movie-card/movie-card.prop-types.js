import PropTypes from 'prop-types';

export default {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  preview: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  renderPreview: PropTypes.func
};
