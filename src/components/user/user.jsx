// Libraries
import React from 'react';
// PropTypes
import propTypes from './user.prop-types';
import Link from '../link/link';

function User({name, avatar}) {
  const hasUser = Boolean(name && avatar);

  return (
    <div className="user-block">
      {hasUser ?
        <div className="user-block__avatar">
          <img src={avatar} alt={name} width="63" height="63"/>
        </div>
        :
        <Link to="/sign-in" className="user-block__link">Sign in</Link>
      }
    </div>
  );
}

User.propTypes = propTypes;

export default React.memo(User);
