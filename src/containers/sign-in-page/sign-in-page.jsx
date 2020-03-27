// Libraries
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// PropTypes
import propTypes from './sign-in-page.prop-types';
// Constants and utils
import {PathName} from '../../constants/consts';
// Components
import SignInPage from '../../components/sign-in-page/sign-in-page';
//
import excludeProps from '../../utils/components/exclude-props';
import OperationCreator from '../../store/operations/operation-creator';

const PROPS_TO_EXCLUDE = [
  `user`,
  `notification`
];

function SignInPageContainer(props) {
  const {user, notification} = props;

  if (user) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const propsToComponent = excludeProps(props, PROPS_TO_EXCLUDE);

  return <SignInPage {...propsToComponent} message={notification ? notification.content : null}/>;
}

SignInPageContainer.propTypes = propTypes;

const mapStateToProps = ({user, notification}) => ({user, notification});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(OperationCreator.login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPageContainer);
