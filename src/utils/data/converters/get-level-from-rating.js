import {ConverterName} from '../../../consts';
import getConverter from './get-converter';

function getLevelFromRating(milestones) {
  return (rating) => getConverter(ConverterName.RATING.LEVEL, milestones)(rating);
}

export default getLevelFromRating;
