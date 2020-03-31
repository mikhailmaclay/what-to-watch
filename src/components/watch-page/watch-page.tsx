// Libraries
import * as React from 'react';
// Styles
import styles from './watch-page.styles';
// Components
import Video from '../video/video';
import WatchPageControls from '../watch-page-controls/watch-page-controls';

const BACKGROUND_IMAGE_INDEX = 1;

interface Props {
  name: string;
  video: string;
  background: string[];
  onClose: () => void;
}

function WatchPage(props: Props) {
  const {name, video, background, onClose} = props;
  const backgroundImage = background[BACKGROUND_IMAGE_INDEX];

  return (
    <div className="player" style={styles.player}>
      <Video width="100%" height="100%" style={styles.video} name={name} src={video} poster={backgroundImage} isAutoPlay isLooped hasCustomControls onEscKeyDown={onClose} renderControls={(propsToControls) => (
        <WatchPageControls name={name} onClose={onClose} {...propsToControls}/>
      )}/>
    </div>
  );
}

export default React.memo(WatchPage);
