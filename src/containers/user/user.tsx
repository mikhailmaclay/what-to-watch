// Libraries
import * as React from 'react';
import {connect} from 'react-redux';
// Components
import User from '../../components/user/user';
//
import history from '../../history';
import {PathName} from '../../constants/consts';

function UserContainer(props) {
  const isSignInPage = history.location.pathname === PathName.SIGN_IN;

  if (isSignInPage) {
    return null;
  }

  return <User {...props}/>;
}

const mapStateToProps = ({user}) => {
  if (!user) {
    return {};
  }

  return {name: user.name, avatar: user.avatar};
};

export default connect(mapStateToProps)(UserContainer);
