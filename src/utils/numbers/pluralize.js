const PLURALIZE_CASES = [2, 0, 1, 1, 1, 2];

function pluralize(word) {
  return (number) => word[(number % 100 > 4 && number % 100 < 20) ? 2 : PLURALIZE_CASES[(number % 10 < 5) ? number % 10 : 5]];
}

export default pluralize;
