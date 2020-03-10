import {FilterName} from '../../../consts';
import getFilter from './get-filter';

function getReviewById(id) {
  return (reviews) => getFilter(FilterName.REVIEWS.ID, id)(reviews);
}

export default getReviewById;
