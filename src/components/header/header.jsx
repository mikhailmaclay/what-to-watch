// Libraries
import React from 'react';
// Components
import LogoWrapped from '../logo/logo';

function Header() {
  const isUserLoggedIn = true;

  return (
    <header className="page-header movie-card__head">
      <LogoWrapped/>
      {isUserLoggedIn &&
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      }
    </header>
  );
}

export default React.memo(Header);
