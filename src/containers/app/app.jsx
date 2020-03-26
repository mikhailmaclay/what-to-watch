// Libraries
import React from 'react';
import {connect} from 'react-redux';
// PropTypes
import propTypes from './app.prop-types';
// Components
import App from '../../components/app/app';
//
import OperationCreator from '../../store/operations/operation-creator';
import NotificationContainer from '../notification/notification';

class AppContainer extends React.PureComponent {
  componentDidMount() {
    const {loadMovies, checkAuthorization} = this.props;

    checkAuthorization();
    loadMovies();
  }

  render() {
    let {movies} = this.props;

    if (!movies) {
      return (
        <NotificationContainer/>
      );
    }

    return (
      <>
        <App/>
        <NotificationContainer/>
      </>
    );
  }
}

AppContainer.propTypes = propTypes;

const mapStateToProps = ({movies}) => ({
  movies
});

const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => dispatch(OperationCreator.loadMovies()),
  checkAuthorization: () => dispatch(OperationCreator.checkAuthorization())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

// Я не знаю как это тестить. Пытался мокнуть api, но не вышло. Из-за этого от теста нет толк, так как компонент всегда будет возвращать null
