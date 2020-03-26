// Libraries
import React from 'react';
// PropTypes
import propTypes from './user.prop-types';

function User({name, avatar}) {
  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src={avatar} alt={name} width="63" height="63"/>
      </div>
    </div>
  );
}

User.propTypes = propTypes;

export default User;
