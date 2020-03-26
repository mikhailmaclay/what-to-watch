// Libraries
import React from 'react';
import {connect} from 'react-redux';
// PropTypes
import propTypes from './user.prop-types';
// Components
import User from '../../components/user/user';

function UserContainer(props) {
  const {name, avatar} = props;

  if (!name && !avatar) {
    return null;
  }

  return <User {...props}/>;
}

UserContainer.propTypes = propTypes;

const mapStateToProps = ({user}) => {
  if (!user) {
    return {name: null, avatar: null};
  }

  return {name: user.name, avatar: user.avatar};
};

export default connect(mapStateToProps)(UserContainer);
