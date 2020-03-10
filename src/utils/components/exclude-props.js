function excludeProps(props = {}, propNames = []) {
  const temp = {};

  Object.keys(props).forEach((propName) => {
    if (!propNames.includes(propName)) {
      temp[propName] = props[propName];
    }
  });

  return temp;
}

export default excludeProps;
