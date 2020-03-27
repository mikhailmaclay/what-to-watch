// Libraries
import React from 'react';
// PropTypes
import propTypes from './header.prop-types';
// Constants and utils
import excludeProps from '../../utils/components/exclude-props';
// Components
import UserContainer from '../../containers/user/user';
import Logo from '../logo/logo';

const PROPS_TO_EXCLUDE = [
  `children`
];

function Header(props) {
  const {children} = props;
  const propsToParent = excludeProps(props, PROPS_TO_EXCLUDE);

  return (
    <header {...propsToParent}>
      <Logo/>
      {children}
      <UserContainer/>
    </header>
  );
}

Header.propTypes = propTypes;

export default React.memo(Header);
