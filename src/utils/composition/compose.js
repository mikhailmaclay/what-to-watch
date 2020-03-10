function compose(...functions) {
  return (argument) => functions.reduce((accumulator, currentFunction) => currentFunction(accumulator), argument);
}

export default compose;
