import PropTypes from 'prop-types';

export default {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number,
    directors: PropTypes.arrayOf(PropTypes.string).isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.array.isRequired,
    similarMovies: PropTypes.arrayOf(PropTypes.object),
    isInMyList: PropTypes.bool.isRequired
  }),
  baseURL: PropTypes.string.isRequired,
  changeMovieStatus: PropTypes.func.isRequired
};
