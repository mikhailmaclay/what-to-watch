// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-poster.prop-types';
// Constants and utils
import {getLabeledDisplayName} from '../../utils';

const PROP_NAMES_TO_IMAGE = [`src`, `alt`];

function MoviePoster(props) {
  const {src, alt} = props;
  const propsToParent = {};

  Object.keys(props).forEach((propName) => {
    if (!PROP_NAMES_TO_IMAGE.includes(propName)) {
      propsToParent[propName] = props[propName];
    }
  });

  return (
    <div {...propsToParent}>
      <img src={src} alt={alt} width="218" height="327"/>
    </div>
  );
}

MoviePoster.displayName = getLabeledDisplayName(`Proxy`, MoviePoster);

MoviePoster.propTypes = propTypes;

export default MoviePoster;
