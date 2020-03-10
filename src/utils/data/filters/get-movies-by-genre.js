import {FilterName} from '../../../consts';
import compose from '../../composition/compose';
import getFilter from './get-filter';

function getMoviesByGenre(genre, exceptId) {
  return (movies) => compose(getFilter(FilterName.MOVIES.EXCEPT_ID, exceptId), getFilter(FilterName.MOVIES.GENRE, genre))(movies);
}

export default getMoviesByGenre;
