// Libraries
import * as React from 'react';
import {connect} from 'react-redux';
// Constants and utils
import {Config, PathName} from '../../constants/consts';
// Components
import Notification from '../../components/notification/notification';
//
import history from '../../history';
import {Notification as NotificationType} from '../../types';
import ActionCreator from '../../store/actions/action-creator';

interface Props {
  notification: NotificationType;
  hide: () => void;
}

class NotificationContainer extends React.PureComponent<Props, {}> {
  private timeout: ReturnType<typeof setTimeout>;

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
    const isSignInPage = history.location.pathname === PathName.SIGN_IN;

    if (!notification || isSignInPage) {
      return null;
    }

    return <Notification title={notification.title} content={notification.content}/>;
  }
}

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
