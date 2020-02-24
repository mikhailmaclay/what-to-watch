// Libraries
import {connect} from 'react-redux';
// Components
import App from './app';

const mapStateToProps = ({movies, reviews, users}) => ({
  movies,
  reviews,
  users
});

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
