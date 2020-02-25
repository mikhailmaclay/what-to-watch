import PropTypes from 'prop-types';

export default {
  src: PropTypes.string,
  isPlaying: PropTypes.bool,
  isPaused: PropTypes.bool,
  isLooped: PropTypes.bool,
  isMuted: PropTypes.bool,
  setState: PropTypes.func.isRequired
};
