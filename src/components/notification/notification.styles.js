export default {
  container: (title) => ({
    position: `fixed`,
    width: `100%`,
    height: `100px`,
    padding: `25px 20px`,
    backgroundColor: (() => {
      switch (title) {
        case `Ошибка`:
          return `#FF9749`;

        default:
          return `whitesmoke`;
      }
    })(),
    zIndex: `1000`,
    bottom: `0`,
    left: `0`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
  })
};
