// Libraries
import {connect} from 'react-redux';
// Components
import PrivateRoute from '../../components/private-route/private-route';

const mapStateToProps = ({user}) => ({
  isAuthorized: Boolean(user)
});

const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);

export default PrivateRouteContainer;
