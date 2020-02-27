// Libraries
import React from 'react';
// PropTypes
import propTypes from './link.prop-types';
// Constants and utils
import {excludeProps, extend, isCurrentUrl} from '../../utils';

const PROPS_TO_EXCLUDE = [`to`, `onClick`];

function Link(props) {
  const {to, onClick} = props;
  const isCurrent = isCurrentUrl(to);

  const propsToParent = excludeProps(props, PROPS_TO_EXCLUDE);

  const handleClick = (evt) => {
    evt.preventDefault();

    onClick();
  };

  return React.createElement(`a`, extend(propsToParent, !isCurrent && {href: to, onClick: handleClick}));
}

Link.propTypes = propTypes;

export default React.memo(Link);
