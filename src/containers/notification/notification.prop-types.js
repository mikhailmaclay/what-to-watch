import PropTypes from 'prop-types';

export default {
  notification: PropTypes.exact({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }),
  hide: PropTypes.func.isRequired
};
