// Libraries
import React from 'react';
import {withRouter} from 'react-router-dom';
// PropTypes
import propTypes from './logo.prop-types';
// Constants and utils
import {PathName} from '../../consts';
// Components
import Link from '../link/link';

function Logo({theme, /* withRouter */ history}) {
  return (
    <div className="logo">
      <Link to={PathName.ROOT} onClick={() => history.push(PathName.ROOT)} className={`logo__link ${theme ? `logo__link--` + theme : ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = propTypes;

const LogoMemo = React.memo(Logo);

LogoMemo.displayName = `Logo`;

const LogoWrapped = withRouter(LogoMemo);

export default LogoWrapped;
export {Logo, LogoMemo};
