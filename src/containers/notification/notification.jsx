// Libraries
import React from 'react';
import {connect} from 'react-redux';
// PropTypes
import propTypes from './notification.prop-types';
// Constants and utils
import {Config} from '../../constants/consts';
import Notification from '../../components/notification/notification';
import ActionCreator from '../../store/actions/action-creator';

class NotificationContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.timeout = null;
  }

  componentDidMount() {
    const {notification, hide} = this.props;

    if (notification) {
      this.timeout = setTimeout(hide, Config.NOTIFICATION_TIMEOUT);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentDidUpdate() {
    const {notification, hide} = this.props;

    if (notification) {
      clearTimeout(this.timeout);

      this.timeout = setTimeout(hide, Config.NOTIFICATION_TIMEOUT);
    }
  }

  render() {
    const {notification} = this.props;

    if (!notification) {
      return null;
    }

    return <Notification title={notification.title} content={notification.content}/>;
  }
}

NotificationContainer.propTypes = propTypes;

const mapStateToProps = ({notification}) => {
  if (!notification) {
    return {};
  }

  return {notification};
};

const mapDispatchToProps = (dispatch) => ({
  hide: () => dispatch(ActionCreator.hideNotification())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
