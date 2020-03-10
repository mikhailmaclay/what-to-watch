export default {
  button: (isCurrent) => ({
    paddingRight: `0`,
    paddingLeft: `0`,
    border: `none`,
    background: `transparent`,
    cursor: isCurrent ? `` : `pointer`,
    userSelect: `none`
  })
};

