import PropTypes from 'prop-types';

export default {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf([PropTypes.node])])
};
