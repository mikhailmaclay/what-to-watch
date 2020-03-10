// Libraries
import React from 'react';
// PropTypes
import propTypes from './video.prop-types';
// Styles
import styles from './video.styles';
// Constants and utils
import {Config, KeyCode} from '../../consts';
import bind from '../../utils/components/bind';
import getDuration from '../../utils/time/get-duration';
import reduceToPercents from '../../utils/numbers/reduce-to-percents';
import excludeProps from '../../utils/components/exclude-props';
import extend from '../../utils/objects/extend';
import createHOC from '../../utils/components/create-hoc';

const ONE_HUNDRED_PERCENT = 100;
const DECIMAL_NUMBER_SYSTEM = 10;
const MIN_POSITION_LEFT_VALUE = 0;
const MIN_CURRENT_TIME_VALUE = 0;
const WATCH_MODE_TIMEOUT = 4000;
const PROPS_TO_EXCLUDE = [
  `onAbort`,
  `onCanPlay`,
  `onCanPlayThrough`,
  `onDurationChange`,
  `onEmptied`,
  `onEnded`,
  `onError`,
  `onLoadedData`,
  `onLoadedMetadata`,
  `onLoadStart`,
  `onPause`,
  `onPlay`,
  `onPlaying`,
  `onProgress`,
  `onRateChange`,
  `onSeeked`,
  `onSeeking`,
  `onStalled`,
  `onSuspend`,
  `onTimeUpdate`,
  `onVolumeChange`,
  `onWaiting`,
  //
  `onClick`,
  `onDoubleClick`,
  `onEscKeyDown`,
  //
  `hasControls`,
  `hasCustomControls`,
  `isLooped`,
  `isAutoPlay`,
  `isMuted`,
  `hasntTimeUpdate`,
  `hasntFullscreen`,
  //
  `renderControls`,
  //
  `width`,
  `height`,
  `style`,
  //
  `isMetadataLoaded`,
  `isFullscreen`,
  `isWatchMode`,
  `isPlaying`,
  `isWaiting`,
  `isPaused`,
  `isEnded`,
  `currentTime`,
  `duration`,
  `onWatchMode`,
  `onMute`,
  `onFullscreenChange`
];

class Video extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.progressBarButtonRef = {current: null};
    this.mouseMoveTimeout = null;

    bind(this,
        // Methods
        this.togglePlay,
        this.play,
        this.pause,
        this.toggleMute,
        this.setVolume,
        this.setCurrentTime,
        this.requestFullscreen,
        this.configureVideoRef,
        this.addEventListeners,
        this.removeEventListeners,
        // Video event handlers
        this.handleTimeUpdate,
        this.handleCanPlayThrough,
        this.handleDurationChange,
        this.handleEnded,
        // Other
        this.handleProgressBarMouseOver,
        this.handleProgressBarClick,
        this.handleProgressBarButtonMouseDown,
        this.handleProgressBarButtonMouseMove,
        this.handleProgressBarButtonMouseUp,
        this.handleContextMenu,
        this.handleKeyDown,
        this.handleMouseMove
    );
  }

  componentDidMount() {
    this.configureVideoRef();
    this.addEventListeners();
  }

  componentWillUnmount() {
    this.removeEventListeners();
    clearTimeout(this.mouseMoveTimeout);
  }

  togglePlay() {
    const {isWaiting, isPaused, isEnded} = this.props;

    if (!isWaiting && (isPaused || isEnded)) {
      this.play();
    } else {
      this.pause();
    }
  }

  play() {
    const {video} = this;

    const promise = video.play();

    if (promise !== undefined) {
      promise.then(() => {}).catch(() => {});
    }
  }

  pause() {
    const {video} = this;

    const currentTime = video.currentTime;

    const promise = video.pause();

    this.setCurrentTime(currentTime);

    if (promise !== undefined) {
      promise.then(() => {}).catch(() => {});
    }
  }

  toggleMute() {
    const {/* withVideo: */onMute} = this.props;

    onMute().then(() => {
      const {video} = this;
      const {isMuted} = this.props;

      video.muted = isMuted;
    });
  }

  setVolume(value) {
    const {video} = this;

    video.volume = reduceToPercents(value);
  }

  setCurrentTime(value) {
    const {video} = this;
    const {duration, currentTime, isEnded} = this.props;
    const isStarted = Boolean(currentTime);

    video.currentTime = Math.max(MIN_CURRENT_TIME_VALUE, Math.min(duration, value));

    if (!isStarted || isEnded) {
      this.play();
    }
  }

  requestFullscreen() {
    const {video} = this;

    const videoParent = video.parentElement;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoParent.requestFullscreen({navigationUI: `show`});
    }
  }

  configureVideoRef() {
    const {video} = this;
    const {isAutoPlay, isMuted, isLooped, hasControls} = this.props;

    video.controls = hasControls;
    video.autoplay = isAutoPlay;
    video.loop = isLooped;
    video.muted = isMuted;
  }

  addEventListeners() {
    const {hasCustomControls, /* withVideo: */ onFullscreenChange} = this.props;

    if (hasCustomControls) {
      window.addEventListener(`keydown`, this.handleKeyDown);
      window.addEventListener(`mousemove`, this.handleMouseMove);
      document.addEventListener(`fullscreenchange`, onFullscreenChange);
    }
  }

  removeEventListeners() {
    const {hasCustomControls, /* withVideo: */ onFullscreenChange} = this.props;

    if (hasCustomControls) {
      window.removeEventListener(`mousemove`, this.handleProgressBarButtonMouseMove);
      window.removeEventListener(`mouseup`, this.handleProgressBarButtonMouseUp);
      window.removeEventListener(`keydown`, this.handleKeyDown);
      window.removeEventListener(`mousemove`, this.handleMouseMove);
      document.removeEventListener(`fullscreenchange`, onFullscreenChange);
    }
  }

  handleCanPlayThrough() {
    const {onCanPlayThrough} = this.props;

    onCanPlayThrough().then(() => { // This block of code fixes a bug with non-auto-play
      const {currentTime, isPaused, isPlaying} = this.props;
      const {isAutoPlay} = this.props;
      const isStarted = Boolean(currentTime);
      const isManuallyPaused = Boolean(isPaused && isPlaying);

      if (isAutoPlay && !isStarted && !isManuallyPaused) {
        this.play();
      }
    }).catch(() => {});
  }

  handleDurationChange() {
    const {video} = this;
    const {onDurationChange} = this.props;

    onDurationChange(video.duration);
  }

  handleEnded() {
    const {isLooped, onEnded} = this.props;

    onEnded().then(() => {
      if (isLooped) {
        this.play();
      }
    }).catch(() => {});
  }

  handleTimeUpdate() {
    const {video} = this;
    const {onTimeUpdate} = this.props;

    onTimeUpdate(video.currentTime);
  }

  handleProgressBarMouseOver({clientX, target}) {
    const progressBar = target;
    const offsetX = clientX - progressBar.getBoundingClientRect().left;

    const time = getDuration(Config.VIDEO_PLAYER_PLAY_TIME_FORMAT)(Math.round((offsetX / progressBar.clientWidth) * parseInt(progressBar.getAttribute(`max`), 10)));

    progressBar.setAttribute(`title`, time);
  }

  handleProgressBarClick({clientX, target}) {
    const progressBar = target;
    const offsetX = clientX - progressBar.getBoundingClientRect().left;

    const time = Math.round((offsetX / progressBar.clientWidth) * parseInt(progressBar.getAttribute(`max`), 10));

    this.setCurrentTime(time);
  }

  handleProgressBarButtonMouseDown({target}) {
    this.progressBarButton = this.progressBarButton || target;

    window.addEventListener(`mousemove`, this.handleProgressBarButtonMouseMove);
    window.addEventListener(`mouseup`, this.handleProgressBarButtonMouseUp);
  }

  handleProgressBarButtonMouseMove({clientX}) {
    const {progressBarButton} = this;

    const {parentElement: progressBarButtonParent} = progressBarButton;

    const maxPositionLeftValue = progressBarButtonParent.getBoundingClientRect().width;
    const positionLeft = ONE_HUNDRED_PERCENT * Math.max(MIN_POSITION_LEFT_VALUE, Math.min(maxPositionLeftValue, clientX)) / maxPositionLeftValue;

    progressBarButton.style.left = `${positionLeft}%`;
  }

  handleProgressBarButtonMouseUp() {
    window.removeEventListener(`mouseup`, this.handleProgressBarButtonMouseUp);
    window.removeEventListener(`mousemove`, this.handleProgressBarButtonMouseMove);

    const {progressBarButton} = this;
    const {duration} = this.props;
    const percentageProgress = parseInt(progressBarButton.style.left, DECIMAL_NUMBER_SYSTEM);

    this.setCurrentTime(duration * percentageProgress / ONE_HUNDRED_PERCENT);
  }

  handleMouseMove() {
    const {/* withVideo: */onMouseMove, onWatchMode} = this.props;

    clearTimeout(this.mouseMoveTimeout);

    onMouseMove();

    this.mouseMoveTimeout = setTimeout(onWatchMode, WATCH_MODE_TIMEOUT);
  }

  handleContextMenu(evt) {
    evt.preventDefault();
  }

  handleKeyDown({code}) {
    const {onEscKeyDown} = this.props;

    switch (code) {
      case KeyCode.ESC:
        onEscKeyDown();

        break;
    }
  }

  render() {
    const {width, height, style, hasCustomControls, hasntTimeUpdate, hasntFullscreen, renderControls,
      /* withVideo: */
      isMetadataLoaded,
      isFullscreen,
      isWatchMode,
      isPlaying,
      isWaiting,
      isPaused,
      isEnded,
      isMuted,
      duration,
      currentTime,
      onLoadedMetadata,
      onPlay,
      onPause,
      onPlaying,
      onWaiting
    } = this.props;

    const eventHandlers = { // Обработчики событий для элемента video
      onLoadedMetadata,
      onPause,
      onPlay,
      onPlaying,
      onWaiting,
      onCanPlayThrough: this.handleCanPlayThrough,
      onDurationChange: this.handleDurationChange,
      onEnded: this.handleEnded,
      onTimeUpdate: hasCustomControls && !hasntTimeUpdate ? this.handleTimeUpdate : null, // Если есть стилизованные элементы управления и нет необходимости следить за временем
      onClick: hasCustomControls && !hasntTimeUpdate ? this.togglePlay : null, // Если есть стилизованные элементы управления и нет необходимости следить за временем
      onDoubleClick: hasCustomControls && !hasntFullscreen ? this.requestFullscreen : null, // Если есть стилизованные элементы управления и нет возможности перейти в полный экран
      onContextMenu: hasCustomControls ? this.handleContextMenu : null // Если есть стилизованные элементы управления
    };

    const filteredProps = excludeProps(this.props, PROPS_TO_EXCLUDE); // Отфильтрованные свойтсва для передачи элементу video
    const propsToParent = extend(eventHandlers, filteredProps); // Объединенные обработчики событий и свойства для элемента video
    const propsToControls = { // Свойства для передачи в рендер-проп renderControls
      isMetadataLoaded,
      isFullscreen,
      isWatchMode,
      isPlaying,
      isWaiting,
      isPaused,
      isEnded,
      isMuted,
      duration,
      currentTime,
      onFullscreenButtonClick: this.requestFullscreen,
      onPlayButtonClick: this.togglePlay,
      onToggleMuteButtonClick: this.toggleMute,
      onProgressBarClick: this.handleProgressBarClick,
      onProgressBarMouseOver: this.handleProgressBarMouseOver,
      onProgressBarButtonMouseDown: this.handleProgressBarButtonMouseDown
    };

    return hasCustomControls ? ( // Если есть стилизованные элементы управления, даем элемент с оберткой из object и добавляет элементы управления
      <object name="video" width={width} height={height} style={style}>
        <video ref={this.videoRef} width="100%" height="100%" {...propsToParent} style={styles.video}/>
        {renderControls && renderControls(propsToControls)}
      </object>
    ) : ( // Если нет, то отдаем просто элемент video
      <video ref={this.videoRef} {...propsToParent} width={width} height={height} style={styles}/>
    );
  }

  get video() {
    return this.videoRef.current;
  }

  get progressBarButton() {
    return this.progressBarButtonRef.current;
  }

  set progressBarButton(element) {
    this.progressBarButtonRef.current = element;
  }
}

Video.propTypes = propTypes;

const VideoWrapped = createHOC(`withVideo`)(Video);

export default VideoWrapped;
export {Video};
