import PropTypes from 'prop-types';

export default {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  hasCustomControls: PropTypes.bool,
  hasntTimeUpdate: PropTypes.bool,
  hasntFullscreen: PropTypes.bool,
  renderControls: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  onEscKeyDown: PropTypes.func
};
