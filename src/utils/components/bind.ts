function bind(thisArg: object, ...functions: any[]) {
  functions.forEach((currentFunction) => {
    thisArg[currentFunction.name] = currentFunction.bind(thisArg);
  });
}

export default bind;
