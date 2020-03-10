// Libraries
import React from 'react';
// PropTypes
import propTypes from './icon.prop-types';
// Constants and utils
import excludeProps from '../../utils/components/exclude-props';

const PROPS_TO_EXCLUDE = [`name`, `title`];

function Icon(props) {
  const {name, width, height, title} = props;

  const propsToParent = excludeProps(props, PROPS_TO_EXCLUDE);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} {...propsToParent}>
      {title && <title>{title}</title>}
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
}

Icon.propTypes = propTypes;

export default React.memo(Icon);
