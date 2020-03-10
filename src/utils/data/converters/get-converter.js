import {ConverterName} from '../../../consts';

function getConverter(converterName, addition) {
  switch (converterName) {
    case ConverterName.RATING.LEVEL:
      return (rating) => {
        const milestones = addition;

        for (let milestone of Object.keys(milestones).reverse()) {
          if (rating >= parseInt(milestone, 10)) {
            return milestones[milestone];
          }
        }

        return ``;
      };

    default:
      return (data) => data;
  }
}

export default getConverter;
