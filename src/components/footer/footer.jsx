// Libraries
import React from 'react';
// Constants and utils
import LogoWrapped from '../logo/logo';

function Footer() {
  return (
    <footer className="page-footer">
      <LogoWrapped theme="light"/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
