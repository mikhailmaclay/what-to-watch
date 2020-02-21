import React from 'react';

import {bind, getLabeledDisplayName} from '../utils';

import VideoPlayer from '../components/video-player/video-player';
import {Config} from '../consts';

function withPreviewOnHover(Component) {
  class WithPreviewOnHover extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this.delayTimeout = null;

      bind(this,
          this.handleMouseEnter,
          this.handleMouseLeave
      );
    }

    handleMouseEnter() {
      this.delayTimeout = setTimeout(() => this.setState({isPlaying: true}), Config.MOVIE_PREVIEW_DELAY_MS);

    // this.setState({isPlaying: true});
    }

    handleMouseLeave() {
      clearTimeout(this.delayTimeout);
      this.setState({isPlaying: false});
    }

    componentWillUnmount() {
      clearTimeout(this.delayTimeout);
    }

    render() {
      const {isPlaying} = this.state;

      return <Component {...this.props} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} renderPreview={(src, poster) => (
        isPlaying && <VideoPlayer src={src} poster={poster} width="100%" height="100%" style={{position: `absolute`, zIndex: `2`, objectFit: `cover`, pointerEvents: `none`}} isPreview isPlaying isLooped isMuted/>
      )}/>;
    }
  }

  WithPreviewOnHover.displayName = getLabeledDisplayName(`WithPreviewOnHover`, Component);

  return WithPreviewOnHover;
}

export default withPreviewOnHover;
