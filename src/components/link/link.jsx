// Libraries
import React from 'react';
// PropTypes
import propTypes from './link.prop-types';
// Constants and utils
import excludeProps from '../../utils/components/exclude-props';
import isCurrentURL from '../../utils/url/is-current-url';
//
import history from '../../history';

const PROPS_TO_EXCLUDE = [`to`];

function Link(props) {
  const {to} = props;
  const isCurrent = isCurrentURL(to);

  const propsToParent = excludeProps(props, PROPS_TO_EXCLUDE);

  const handleClick = (evt) => {
    evt.preventDefault();

    history.push(to);
  };

  return <a {...propsToParent} href={isCurrent ? null : to} onClick={isCurrent ? null : handleClick}/>;
}

Link.propTypes = propTypes;

export default React.memo(Link);
