const SPLIT_TO = 2;
const BEGINNING_OF_AN_ARRAY = 0;

function splitArray(array) {
  const HALF_OF_AN_ARRAY_LENGTH = Math.ceil(array.length / SPLIT_TO);

  const temp = [];
  const [first, second] = [array.slice(BEGINNING_OF_AN_ARRAY, HALF_OF_AN_ARRAY_LENGTH), array.slice(HALF_OF_AN_ARRAY_LENGTH)];

  if (first.length) {
    temp.push(first);
  }

  if (second.length) {
    temp.push(second);
  }

  return temp;
}

export default splitArray;
