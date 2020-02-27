import PropTypes from 'prop-types';

export default {
  src: PropTypes.string,
  isLooped: PropTypes.bool,
  isPlaying: PropTypes.bool, // withFlag
  setIsPlayingToTrue: PropTypes.func.isRequired, // withFlag
  setIsPlayingToFalse: PropTypes.func.isRequired, // withFlag
  isPaused: PropTypes.bool, // withFlag
  setIsPausedToTrue: PropTypes.func.isRequired, // withFlag
  setIsPausedToFalse: PropTypes.func.isRequired, // withFlag
  isMuted: PropTypes.bool, // withFlag
  toggleIsMuted: PropTypes.func.isRequired // withFlag
};
