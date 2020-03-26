// Libraries
import React from 'react';
// PropTypes
import propTypes from './watch-page.prop-types';
// Styles
import styles from './watch-page.styles';
// Components
import Video from '../video/video';
import WatchPageControls from '../watch-page-controls/watch-page-controls';

const BACKGROUND_IMAGE_INDEX = 1;

function WatchPage({name, video, background, onClose}) {
  const backgroundImage = background[BACKGROUND_IMAGE_INDEX];

  return (
    <div className="player" style={styles.player}>
      <Video width="100%" height="100%" style={styles.video} name={name} src={video} poster={backgroundImage} isAutoPlay isLooped hasCustomControls onEscKeyDown={onClose} renderControls={(props) => (
        <WatchPageControls name={name} onClose={onClose} {...props}/>
      )}/>
    </div>
  );
}

WatchPage.propTypes = propTypes;

export default React.memo(WatchPage);
