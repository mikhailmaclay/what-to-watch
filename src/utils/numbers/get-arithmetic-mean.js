const PRECISION_COMPENSATION_FOR_TO_FIXED = -2;

function getArithmeticMean(precision = 1) {
  return (numbers = []) => {
    const numbersSumm = numbers.reduce((summ, number) => summ + number, 0);

    return numbersSumm && parseFloat((numbersSumm / numbers.length).toFixed(precision + PRECISION_COMPENSATION_FOR_TO_FIXED));
  };
}

export default getArithmeticMean;
