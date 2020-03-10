import getFilter from './get-filter';
import {FilterName} from '../../../consts';

const BEGINNING_OF_AN_ARRAY = 0;

function getMovieById(id) {
  return (movies) => getFilter(FilterName.MOVIES.ID, id)(movies)[BEGINNING_OF_AN_ARRAY];
}

export default getMovieById;
