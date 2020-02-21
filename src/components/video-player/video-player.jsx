// Libraries
import React from 'react';
// PropTypes
import propTypes from './video-player.prop-types';
// Constants and utils
import {Config} from '../../consts';
import {bind, excludeProps, getLabeledDisplayName} from '../../utils';
// Components
import Button from '../button/button';
// HOCs
import withStateUpdate from '../../hocs/with-state-update';

const PROPS_TO_EXCLUDE = [`updateState`, `isPreview`, `isPlaying`, `isPaused`, `isLooped`, `isMuted`];

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
    const {updateState} = this.props;

    updateState({isPlaying: true, isPaused: false});
  }

  pause() {
    const {updateState} = this.props;

    updateState({isPlaying: false, isPaused: true});
  }

  toggleVolume() {
    const {isMuted, updateState} = this.props;

    updateState({isMuted: !isMuted});
  }

  setVolume(volume) {
    const {updateState} = this.props;

    if (volume === 0) {
      updateState({isMuted: true, volume});
    } else {
      updateState({isMuted: false, volume});
    }
  }

  updateRef() {
    const {volume, isPlaying, isPaused, isLooped, isMuted} = this.props;
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
    const {src, isMuted, isPreview} = this.props;

    const propsToParent = excludeProps(this.props, PROPS_TO_EXCLUDE);

    this.updateRef();

    return src ?
      <>
        {isPreview &&
          <Button style={{position: `absolute`, zIndex: `3`, bottom: `8px`, right: `8px`, display: `block`, margin: `0`, padding: `0 4px`, backgroundColor: `transparent`, border: `none`, cursor: `pointer`, transform: `translate3d(0, 0, 0)`}} title={isMuted ? `Unmute` : `Mute`} onClick={this.toggleVolume}>
            <svg width="15" height="15" style={{transform: isMuted ? `translateX(1.3px)` : ``}}>
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
VideoPlayer.defaultProps = {
  volume: Config.VIDEO_PLAYER_DEFAULT_VOLUME,
  isPlaying: true,
  isPaused: false,
  isLooped: false,
  isMuted: false
};

const VideoPlayerWithStateUpdate = withStateUpdate(VideoPlayer);

export default VideoPlayerWithStateUpdate;
