// Libraries
import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
// Constants and utils
import {PathName} from '../../constants/consts';

interface Props {
  path: string;
  exact?: boolean;
  isAuthorized: boolean;
  children: React.ReactNode;
}

function PrivateRoute(props: Props) {
  const {path, exact, children, isAuthorized} = props;

  return (
    <Route path={path} exact={exact}>
      {isAuthorized ?
        children : <Redirect to={PathName.SIGN_IN}/>
      }
    </Route>
  );
}

export default PrivateRoute;
