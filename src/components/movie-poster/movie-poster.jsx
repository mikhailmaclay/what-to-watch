// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-poster.prop-types';
// Constants and utils
import excludeProps from '../../utils/components/exclude-props';

const PROPS_TO_EXCLUDE = [`src`, `alt`];

function MoviePoster(props) {
  const {src, alt} = props;
  const propsToParent = excludeProps(props, PROPS_TO_EXCLUDE);

  return (
    <div {...propsToParent}>
      <img src={src} alt={alt} width="218" height="327"/>
    </div>
  );
}

MoviePoster.propTypes = propTypes;

export default React.memo(MoviePoster);
