// Libraries
import * as React from 'react';
// Constants and utils
import {PathName} from '../../constants/consts';
// Components
import Link from '../link/link';

interface Props {
  theme?: string;
}

function Logo(props: Props) {
  const {theme} = props;

  return (
    <div className="logo">
      <Link to={PathName.ROOT} className={`logo__link ${theme ? `logo__link--` + theme : ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default React.memo(Logo);
