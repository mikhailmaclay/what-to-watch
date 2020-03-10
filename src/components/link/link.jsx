// Libraries
import React from 'react';
import {Link as ReactRouterDOMLink} from 'react-router-dom';
// PropTypes
import propTypes from './link.prop-types';
// Constants and utils
import excludeProps from '../../utils/components/exclude-props';
import extend from '../../utils/objects/extend';
import isCurrentURL from '../../utils/url/is-current-url';

const PROPS_TO_EXCLUDE = [`to`];

function Link(props) {
  const {to} = props;
  const isCurrent = isCurrentURL(to);

  const propsToParent = excludeProps(props, PROPS_TO_EXCLUDE);

  return React.createElement(isCurrent ? `a` : ReactRouterDOMLink, extend(propsToParent, !isCurrent && {to}));
}

Link.propTypes = propTypes;

export default React.memo(Link);
