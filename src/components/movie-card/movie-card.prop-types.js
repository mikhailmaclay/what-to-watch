import PropTypes from 'prop-types';

export default {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  preview: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  history: PropTypes.shape({ // withRouter
    push: PropTypes.func.isRequired
  }),
  renderPreview: PropTypes.func, // withPreviewOnHover
  onMouseEnter: PropTypes.func, // withPreviewOnHover
  onMouseLeave: PropTypes.func // withPreviewOnHover
};
