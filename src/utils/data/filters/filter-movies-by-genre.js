import {FilterName} from '../../../constants/consts';
import compose from '../../composition/compose';
import getFilter from './get-filter';

function filterMoviesByGenre(genre, exceptID) {
  return (movies) => compose(getFilter(FilterName.MOVIES.EXCEPT_ID, exceptID), getFilter(FilterName.MOVIES.GENRE, genre))(movies);
}

export default filterMoviesByGenre;
