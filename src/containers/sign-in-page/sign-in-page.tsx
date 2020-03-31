// Libraries
import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// Constants and utils
import {PathName} from '../../constants/consts';
// Components
import SignInPage from '../../components/sign-in-page/sign-in-page';
//
import excludeProps from '../../utils/components/exclude-props';
import OperationCreator from '../../store/operations/operation-creator';
import {User, Notification} from '../../types';

const PROPS_TO_EXCLUDE = [
  `user`,
  `notification`
];

interface Props {
  user: User;
  notification: Notification;
}

function SignInPageContainer(props: Props) {
  const {user, notification} = props;

  if (user) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const propsToComponent = excludeProps(props, PROPS_TO_EXCLUDE);

  return <SignInPage {...propsToComponent} message={notification ? notification.content : null}/>;
}

const mapStateToProps = ({user, notification, isFetching}) => ({user, notification, isFetching});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(OperationCreator.login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPageContainer);
