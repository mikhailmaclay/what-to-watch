import PropTypes from 'prop-types';

export default {
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  isFullscreen: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMetadataLoaded: PropTypes.bool.isRequired,
  isWaiting: PropTypes.bool.isRequired,
  isPaused: PropTypes.bool.isRequired,
  isEnded: PropTypes.bool.isRequired, isWatchMode: PropTypes.bool.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onProgressBarClick: PropTypes.func.isRequired,
  onProgressBarMouseOver: PropTypes.func.isRequired,
  onProgressBarButtonMouseDown: PropTypes.func.isRequired
};
