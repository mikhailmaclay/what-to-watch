// Libraries
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
// PropTypes
import propTypes from './private-route.prop-types';
// Constants and utils
import {PathName} from '../../constants/consts';

function PrivateRoute({path, exact, children, isAuthorized}) {
  return (
    <Route path={path} exact={exact}>
      {isAuthorized ?
        children : <Redirect to={PathName.SIGN_IN}/>
      }
    </Route>
  );
}

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;
