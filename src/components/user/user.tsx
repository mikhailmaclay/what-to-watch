// Libraries
import * as React from 'react';
// Constants and utils
import {PathName} from '../../constants/consts';
// Components
import Link from '../link/link';

interface Props {
  name: string;
  avatar: string;
}

function User(props: Props) {
  const {name, avatar} = props;

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

export default React.memo(User);
