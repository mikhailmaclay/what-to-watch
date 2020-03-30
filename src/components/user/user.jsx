// Libraries
import React from 'react';
// PropTypes
import propTypes from './user.prop-types';
// Constants and utils
import {PathName} from '../../constants/consts';
// Components
import Link from '../link/link';

function User({name, avatar}) {
  const hasUser = Boolean(name && avatar);

  return (
    <div className="user-block">
      {hasUser ?
        <div className="user-block__avatar">
          <Link to={PathName.MY_LIST}>
            <img src={avatar} alt={name} width="63" height="63"/>
          </Link>
        </div>
        :
        <Link to={PathName.SIGN_IN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
}

User.propTypes = propTypes;

export default React.memo(User);
