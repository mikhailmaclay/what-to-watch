import PropTypes from 'prop-types';

export default {
  specialMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
  }).isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired
};
