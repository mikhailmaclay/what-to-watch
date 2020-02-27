// Libraries
import React from 'react';
// PropTypes
import propTypes from './with-preview-on-hover.prop-types';
// Styles
import styles from './with-preview-on-hover.styles';
// Constants and utils
import {Config} from '../../consts';
import {bind, compose, getLabeledDisplayName} from '../../utils';
// Components
import {VideoPlayerMemo} from '../../components/video-player/video-player';
// HOCs
import withFlag from '../with-flag';
import withPercentageCounter from '../with-percentage-counter';

function withPreviewOnHover(Component) {
  class WithPreviewOnHover extends React.PureComponent {
    constructor(props) {
      super(props);

      this.videoPlayerComponent = compose(
          (VideoPlayerComponent) => withFlag(VideoPlayerComponent, `isPlaying`, Config.MOVIE_PREVIEW_IS_PLAYING_ON_START),
          (VideoPlayerComponent) => withFlag(VideoPlayerComponent, `isPaused`, !Config.MOVIE_PREVIEW_IS_PLAYING_ON_START),
          (VideoPlayerComponent) => withFlag(VideoPlayerComponent, `isMuted`, Config.MOVIE_PREVIEW_IS_MUTED_ON_START),
          (VideoPlayerComponent) => withPercentageCounter(VideoPlayerComponent, `volume`, Config.MOVIE_PREVIEW_DEFAULT_VOLUME)
      )(VideoPlayerMemo);
      this.delayTimeout = null;

      bind(this,
          this.handleMouseEnter,
          this.handleMouseLeave
      );
    }

    handleMouseEnter() {
      this.delayTimeout = setTimeout(() => {
        const {setIsActiveToTrue} = this.props;

        setIsActiveToTrue();
      }, Config.MOVIE_PREVIEW_DELAY_MS);
    }

    handleMouseLeave() {
      const {setIsActiveToFalse} = this.props;

      clearTimeout(this.delayTimeout);
      setIsActiveToFalse();
    }

    componentWillUnmount() {
      clearTimeout(this.delayTimeout);
    }

    render() {
      const {isActive} = this.props;
      const VideoPlayerWrapped = this.videoPlayerComponent;

      return <Component {...this.props} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} renderPreview={(src, poster) => (
        Boolean(src) && isActive && <VideoPlayerWrapped src={src} poster={poster} width="100%" height="100%" style={styles.videoPlayer} isPreview isLooped={Config.MOVIE_PREVIEW_IS_LOOPED}/>
      )}/>;
    }
  }

  WithPreviewOnHover.displayName = getLabeledDisplayName(`WithPreviewOnHover`, Component);

  WithPreviewOnHover.propTypes = propTypes;

  return WithPreviewOnHover;
}

export default (Component) => {
  const WrappedComponent = withFlag(withPreviewOnHover(Component), `isActive`, false);

  WrappedComponent.displayName = getLabeledDisplayName(`withFlag`, Component);

  return WrappedComponent;
};
