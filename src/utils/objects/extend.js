function extend(...objects) {
  const temp = {};

  objects.forEach((object) => Object.assign(temp, object));

  return temp;
}

export default extend;
