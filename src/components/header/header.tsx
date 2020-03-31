// Libraries
import * as React from 'react';
// Constants and utils
import excludeProps from '../../utils/components/exclude-props';
// Components
import UserContainer from '../../containers/user/user';
import Logo from '../logo/logo';

const PROPS_TO_EXCLUDE = [
  `children`
];

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Header(props: Props) {
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

export default React.memo(Header);
