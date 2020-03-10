export default {
  exitButton: {textDecoration: `none`},
  activityIndicator: (isFullscreen) => ({position: `absolute`, zIndex: `3`, top: isFullscreen ? `50%` : `45%`, left: `50%`, fontSize: `72px`, transform: `translate(-50%, -50%)`}),
  controls: {zIndex: `999`, backgroundImage: `linear-gradient(transparent, black)`},
  progressBar: {cursor: `pointer`},
  progressBarButton: (progress, duration) => ({left: `${100 * progress / duration}%`})
};
