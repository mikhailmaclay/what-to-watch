// Libraries
import React from 'react';
// Components
import UserContainer from '../../containers/user/user';
import Logo from '../logo/logo';

function Header() {
  return (
    <header className="page-header movie-card__head">
      <Logo/>
      <UserContainer/>
    </header>
  );
}

export default React.memo(Header);
