import PropTypes from 'prop-types';

export default {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    preview: PropTypes.string,
    background: PropTypes.string.isRequired
  })),
  history: PropTypes.shape({ // withRouter
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.shape({ // withRouter
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
