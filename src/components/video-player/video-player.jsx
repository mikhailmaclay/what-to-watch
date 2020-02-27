// Libraries
import React from 'react';
// PropTypes
import propTypes from './video-player.prop-types';
// Styles
import styles from './video-player.styles';
// Constants and utils
import {Config} from '../../consts';
import {bind, compose, excludeProps, getLabeledDisplayName} from '../../utils';
// Components
import Button from '../button/button';
// HOCs
import withFlag from '../../hocs/with-flag';
import withPercentageCounter from '../../hocs/with-percentage-counter';

const PROPS_TO_EXCLUDE = [
  `isPreview`,
  `isLooped`,
  `volume`, // withPercentageCounter
  `incrementVolume`, // withPercentageCounter
  `decrementVolume`, // withPercentageCounter
  `setVolume`, // withPercentageCounter
  `isPlaying`, // withFlag
  `setIsPlaying`, // withFlag
  `setIsPlayingToTrue`, // withFlag
  `setIsPlayingToFalse`, // withFlag
  `toggleIsPlaying`, // withFlag
  `isPaused`, // withFlag
  `setIsPaused`, // withFlag
  `setIsPausedToTrue`, // withFlag
  `setIsPausedToFalse`, // withFlag
  `toggleIsPaused`, // withFlag
  `isMuted`, // withFlag
  `setIsMuted`, // withFlag
  `setIsMutedToTrue`, // withFlag
  `setIsMutedToFalse`, // withFlag
  `toggleIsMuted` // withFlag
];

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();

    bind(this,
        this.play,
        this.pause,
        this.toggleVolume,
        this.setVolume
    );
  }

  play() {
    const {/* withFlag: */setIsPlayingToTrue, setIsPausedToFalse} = this.props;

    setIsPlayingToTrue();
    setIsPausedToFalse();
  }

  pause() {
    const {/* withFlag: */setIsPlayingToFalse, setIsPausedToTrue} = this.props;

    setIsPlayingToFalse();
    setIsPausedToTrue();
  }

  toggleVolume() {
    const {/* withFlag: */toggleIsMuted} = this.props;

    toggleIsMuted();
  }

  setVolume(volume) {
    const {/* withFlag: */setIsMutedToTrue, setIsMutedToFalse, /* withPercentageCounter: */ setVolume} = this.props;

    if (volume <= 0) {
      setIsMutedToTrue();
      setVolume(volume);
    } else {
      setIsMutedToFalse();
      setVolume(volume);
    }
  }

  updateRef() {
    const {isLooped, /* withFlag: */ isPlaying, isPaused, isMuted, /* withPercentageCounter: */ volume} = this.props;
    const video = this.videoRef.current;

    if (video) {
      video.loop = Boolean(isLooped);
      video.muted = Boolean(isMuted);
      video.volume = volume;

      if (isPaused) {
        video.pause();
      } else if (isPlaying) {
        video.play();
      }
    }
  }

  componentDidMount() {
    this.updateRef();
  }

  render() {
    const {src, isPreview, /* withFlag: */ isMuted} = this.props;

    const propsToParent = excludeProps(this.props, PROPS_TO_EXCLUDE);

    this.updateRef();

    return src ?
      <>
        {isPreview &&
          <Button style={styles.button} title={isMuted ? `Unmute` : `Mute`} onClick={this.toggleVolume}>
            <svg width="15" height="15" style={styles.buttonIcon(isMuted)}>
              <use xlinkHref={isMuted ? `#muted` : `#not-muted`}/>
            </svg>
          </Button>
        }
        <video ref={this.videoRef} {...propsToParent}/>
      </> : null;
  }
}

VideoPlayer.displayName = getLabeledDisplayName(`Proxy`, VideoPlayer);

VideoPlayer.propTypes = propTypes;

const VideoPlayerMemo = React.memo(VideoPlayer);
const VideoPlayerWrapped = compose(
    (Component) => withFlag(Component, `isPlaying`, Config.VIDEO_PLAYER_IS_PLAYING_ON_START),
    (Component) => withFlag(Component, `isPaused`, !Config.VIDEO_PLAYER_IS_PLAYING_ON_START),
    (Component) => withFlag(Component, `isMuted`, Config.VIDEO_PLAYER_IS_MUTED_ON_START),
    (Component) => withPercentageCounter(Component, `volume`, Config.VIDEO_PLAYER_DEFAULT_VOLUME)
)(VideoPlayerMemo);

export default VideoPlayerWrapped;
export {VideoPlayer, VideoPlayerMemo};
