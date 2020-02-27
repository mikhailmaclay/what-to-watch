export default {
  button: {
    position: `absolute`,
    zIndex: `3`,
    bottom: `8px`,
    right: `8px`,
    display: `block`,
    margin: `0`,
    padding: `0 4px`,
    backgroundColor: `transparent`,
    border: `none`,
    cursor: `pointer`,
    transform: `translate3d(0, 0, 0)`
  },
  buttonIcon: (isMuted) => ({transform: isMuted ? `translateX(1.3px)` : ``})
};
