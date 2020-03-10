import {FilterName} from '../../../consts';
import getFilter from './get-filter';

const BEGINNING_OF_AN_ARRAY = 0;

function getUserById(id) {
  return (users) => getFilter(FilterName.USERS.ID, id)(users)[BEGINNING_OF_AN_ARRAY];
}

export default getUserById;
