import React from 'react';

import propTypes from './logo.prop-types';

import {PathName} from '../../consts';

import {Link} from 'react-router-dom';

function Logo({theme}) {
  const {pathname} = location;
  const isRoot = pathname === PathName.ROOT;

  const className = `logo__link ${theme && `logo__link--` + theme}`;

  const renderLetters = () => (
    <>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </>
  );

  return (
    <div className="logo">
      {isRoot ?
        <a className={className}>
          {renderLetters()}
        </a>
        :
        <Link className={className} to={PathName.ROOT}>
          {renderLetters()}
        </Link>
      }
    </div>
  );
}

Logo.propTypes = propTypes;

export default Logo;
