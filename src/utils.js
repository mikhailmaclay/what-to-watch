const PLURALIZE_CASES = [2, 0, 1, 1, 1, 2];

export const bind = (thisArg, ...functions) => {
  functions.forEach((currentFunction) => {
    thisArg[currentFunction.name] = currentFunction.bind(thisArg);
  });
};

export const getArithmeticMean = (numbers = [], precision = 1) => {
  const numbersSumm = numbers.reduce((summ, number) => summ + number, 0);

  return numbersSumm ? (numbersSumm / numbers.length).toPrecision(precision) : numbersSumm;
};

export const getLevelFromNumber = (number, milestones) => {
  for (let milestone of Object.keys(milestones).reverse()) {
    if (number >= parseInt(milestone, 10)) {
      return milestones[milestone];
    }
  }

  return ``;
};

export const pluralize = (number, word) => {
  return word[(number % 100 > 4 && number % 100 < 20) ? 2 : PLURALIZE_CASES[(number % 10 < 5) ? number % 10 : 5]];
};

export const castLots = (eagle, tails) => {
  let result = Math.random() > 0.5;

  if (eagle && tails) {
    return result ? eagle : tails;
  }

  return result;
};
