// Libraries
import * as React from 'react';
// Styles
import styles from '../watch-page-controls/watch-page-controls.styles';
// Constants and utils
import {Config} from '../../constants/consts';
import getDuration from '../../utils/time/get-duration';
// Components
import Button from '../button/button';
import Icon from '../icon/icon';

interface Props {
  name: string;
  isFullscreen: boolean;
  isPlaying: boolean;
  isMetadataLoaded: boolean;
  isWaiting: boolean;
  isPaused: boolean;
  isEnded: boolean;
  isWatchMode: boolean;
  currentTime: number;
  duration: number;
  onFullscreenButtonClick: () => void;
  onPlayButtonClick: () => void;
  onProgressBarClick: () => void;
  onProgressBarMouseOver: () => void;
  onProgressBarButtonMouseDown: () => void;
  onClose: () => void;
}

function WatchPageControls(props: Props) {
  const {name, onClose, isFullscreen, isPlaying, isMetadataLoaded, isWaiting, isPaused, isEnded, isWatchMode, currentTime, duration, onFullscreenButtonClick, onPlayButtonClick, onProgressBarClick, onProgressBarMouseOver, onProgressBarButtonMouseDown} = props;
  const isManuallyPaused = Boolean(isPlaying && isPaused);
  const isWaitingForData = Boolean(isMetadataLoaded && !isPaused && isWaiting);

  return (
    <>
      {!isFullscreen && <Button onClick={onClose} className="player__exit" style={styles.exitButton}>Exit</Button>}

      {isWaitingForData && <Icon name="activity-indicator" width="48" height="48" style={styles.activityIndicator(isFullscreen)}/>}
      {isManuallyPaused && <Icon name="pause" width="48" height="48" style={styles.activityIndicator(isFullscreen)}/>}

      {!isWatchMode &&
      <div className="player__controls" style={styles.controls}>
        {isMetadataLoaded &&
        <div className="player__controls-row">
          <div className="player__time">
            <progress onClick={onProgressBarClick} onMouseOver={onProgressBarMouseOver} className="player__progress" style={styles.progressBar} value={currentTime} max={duration}/>
            <div onMouseDown={onProgressBarButtonMouseDown} className="player__toggler" style={styles.progressBarButton(currentTime, duration)}>Toggler
            </div>
          </div>
          <div className="player__time-value">{getDuration(Config.VIDEO_PLAYER_PLAY_TIME_FORMAT)((duration - Math.floor(currentTime)) / 60)}</div>
        </div>
        }
        <div className="player__controls-row">
          {isMetadataLoaded ?
            <Button onClick={onPlayButtonClick} className="player__play" title={isPaused || isEnded ? `Play` : `Pause`}>
              <Icon name={isPaused || isEnded ? `play-s` : `pause`} width="19" height="19"/>
              <span>{isPaused || isEnded ? `Play` : `Pause`}</span>
            </Button>
            : <Icon name="activity-indicator" width="19" height="19" title="Loading..."/>
          }
          <div className="player__name">{name}</div>
          {!isFullscreen && isMetadataLoaded &&
          <Button onClick={onFullscreenButtonClick} className="player__full-screen" title="Fullscreen">
            <Icon name="full-screen" width="27" height="27"/>
            <span>Full screen</span>
          </Button>
          }
        </div>
      </div>
      }
    </>
  );
}

export default React.memo(WatchPageControls);
