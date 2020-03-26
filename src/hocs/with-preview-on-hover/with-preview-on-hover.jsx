// Libraries
import React from 'react';
// Styles
import styles from './with-preview-on-hover.styles';
// Constants and utils
import {Config} from '../../constants/consts';
import bind from '../../utils/components/bind';
// Components
import VideoWrapped from '../../components/video/video';
import PreviewControls from '../../components/preview-controls/preview-controls';

function withPreviewOnHover(Component) {
  class WithPreviewOnHover extends React.PureComponent {
    constructor(props) {
      super(props);

      this.delayTimeout = null;

      this.state = {
        isActive: false
      };

      bind(this,
          this.handleMouseEnter,
          this.handleMouseLeave
      );
    }

    componentWillUnmount() {
      clearTimeout(this.delayTimeout);
    }

    handleMouseEnter() {
      this.delayTimeout = setTimeout(() => {
        this.setState({isActive: true});
      }, Config.MOVIE_PREVIEW_DELAY_MS);
    }

    handleMouseLeave() {
      clearTimeout(this.delayTimeout);
      this.setState({isActive: false});
    }

    render() {
      const {isActive} = this.state;

      return <Component {...this.props} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} renderPreview={(src) => (
        Boolean(src) && isActive && <VideoWrapped src={src} width="100%" height="100%" style={styles.video} isAutoPlay isMuted isLooped hasCustomControls hasntTimeUpdate hasntFullscreen renderControls={(props) => <PreviewControls {...props}/>}/>
      )}/>;
    }
  }

  return WithPreviewOnHover;
}

export default withPreviewOnHover;
