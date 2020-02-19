import PropTypes from 'prop-types';

export default {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runTime: PropTypes.number.isRequired,
    team: PropTypes.arrayOf(PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired
    })).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.number).isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  })).isRequired,
  match: PropTypes.object.isRequired
};
