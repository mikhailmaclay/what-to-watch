import PropTypes from 'prop-types';

export default {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number,
    directors: PropTypes.arrayOf(PropTypes.string).isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
    score: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    similarMovies: PropTypes.arrayOf(PropTypes.object)
  }),
  baseUrl: PropTypes.string.isRequired,
  history: PropTypes.shape({ // withRouter
    push: PropTypes.func.isRequired
  }).isRequired
};
