function bind(thisArg, ...functions) {
  functions.forEach((currentFunction) => {
    thisArg[currentFunction.name] = currentFunction.bind(thisArg);
  });
}

export default bind;
