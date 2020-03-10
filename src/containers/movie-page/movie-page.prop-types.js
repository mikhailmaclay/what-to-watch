import PropTypes from 'prop-types';

export default {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
    runTime: PropTypes.number.isRequired,
    team: PropTypes.arrayOf(PropTypes.shape).isRequired
  })),
  match: PropTypes.shape({ // withRouter
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  })
};
