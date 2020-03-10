function isMemo(Component) {
  if (Component[`$$typeof`]) {
    return Component[`$$typeof`].toString() === `Symbol(react.memo)`;
  }

  return false;
}

export default isMemo;
