// Libraries
import {createSelector} from 'reselect';
// Constants and utils
import filterMoviesByGenre from '../../utils/data/filters/filter-movies-by-genre';

const getMovies = createSelector(
    ({movies}) => movies,
    ({currentGenre}) => currentGenre,
    (movies, currentGenre) => filterMoviesByGenre(currentGenre)(movies)
);

export default getMovies;
