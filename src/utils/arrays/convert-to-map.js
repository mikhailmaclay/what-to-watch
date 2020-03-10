function convertToMap(propertyNames, list) {
  const [propertyName1, propertyName2] = propertyNames;

  const temp = {};

  list.forEach((item) => {
    temp[item[propertyName1]] = item[propertyName2];
  });

  return temp;
}

export default convertToMap;
