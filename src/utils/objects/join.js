import clone from './clone';

function join(property, list1, list2) {
  const tempList = list1.slice();

  if (Array.isArray(property)) {
    const [propertyName1, propertyName2] = property;

    tempList.forEach((item1, index) => {
      const tempItem1 = clone(item1);

      const item2 = list2.find((item) => tempItem1[propertyName1] === item[propertyName2]);

      if (!item2) {
        return;
      }

      tempItem1[propertyName1] = clone(item2);

      tempList[index] = tempItem1;
    });
  } else if (typeof property === `string`) {
    tempList.forEach((item1, index) => {
      const item2 = list2.find((item) => item1 === item[property]);

      if (!item2) {
        return;
      }

      tempList[index] = clone(item2);
    });
  }

  return tempList;
}

export default join;
