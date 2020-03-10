// Libraries
import React from 'react';
// PropTypes
import propTypes from './with-video.prop-types';
// Constants and utils
import bind from '../../utils/components/bind';
import extend from '../../utils/objects/extend';

function withVideo(Component) {
  class WithVideo extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isMetadataLoaded: false,
        isFullscreen: false,
        isWatchMode: false,
        isPlaying: false,
        isWaiting: true,
        isPaused: true,
        isEnded: false,
        isMuted: this.props.isMuted || false,
        duration: 0,
        currentTime: 0
      };

      bind(this,
          this.handleFullscreenChange,
          this.handleMute,
          this.handleMouseMove,
          this.handleWatchMode,
          this.handleCanPlayThrough,
          this.handleDurationChange,
          this.handelEnded,
          this.handleLoadedMetadata,
          this.handlePause,
          this.handlePlay,
          this.handlePlaying,
          this.handleTimeUpdate,
          this.handleWaiting
      );
    }

    handleFullscreenChange() {
      this.setState({isFullscreen: Boolean(document.fullscreenElement)});
    }

    handleMute() {
      return new Promise((resolve) => this.setState(({isMuted}) => ({isMuted: !isMuted}), resolve));
    }

    handleMouseMove() {
      this.setState({isWatchMode: false});
    }

    handleWatchMode() {
      this.setState(({isFullscreen}) => ({isWatchMode: isFullscreen}));
    }

    handleCanPlayThrough() {
      return new Promise((resolve) => this.setState({isWaiting: false}, resolve));
    }

    handleDurationChange(duration) {
      this.setState({duration});
    }

    handelEnded() {
      return new Promise((resolve) => {
        this.setState({isEnded: true, isPlaying: false}, resolve);
      });
    }

    handleLoadedMetadata() {
      this.setState({isMetadataLoaded: true});
    }

    handlePause() {
      this.setState({isPaused: true});
    }

    handlePlay() {
      this.setState({isPaused: false});
    }

    handlePlaying() {
      this.setState({isPlaying: true, isWaiting: false});
    }

    handleTimeUpdate(currentTime) {
      this.setState({currentTime, isEnded: false});
    }

    handleWaiting() {
      this.setState({isWaiting: true, isPlaying: false});
    }

    render() {
      const eventHandlers = {
        onFullscreenChange: this.handleFullscreenChange,
        onMute: this.handleMute,
        onMouseMove: this.handleMouseMove,
        onWatchMode: this.handleWatchMode,
        onCanPlayThrough: this.handleCanPlayThrough,
        onDurationChange: this.handleDurationChange,
        onEnded: this.handelEnded,
        onLoadedMetadata: this.handleLoadedMetadata,
        onPause: this.handlePause,
        onPlay: this.handlePlay,
        onPlaying: this.handlePlaying,
        onTimeUpdate: this.handleTimeUpdate,
        onWaiting: this.handleWaiting
      };

      const propsToComponent = extend(this.props, this.state, eventHandlers);

      return (
        <Component {...propsToComponent}/>
      );
    }
  }

  WithVideo.propTypes = propTypes;

  return WithVideo;
}

export default withVideo;

