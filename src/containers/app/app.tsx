// Libraries
import * as React from 'react';
import {connect} from 'react-redux';
// Components
import App from '../../components/app/app';
//
import OperationCreator from '../../store/operations/operation-creator';
import NotificationContainer from '../notification/notification';
import {Movie} from '../../types';

interface Props {
  movies: Movie[];
  loadMovies: () => void;
  checkAuthorization: () => void;
}

class AppContainer extends React.PureComponent<Props, {}> {
  componentDidMount() {
    const {loadMovies, checkAuthorization} = this.props;

    checkAuthorization();
    loadMovies();
  }

  render() {
    const {movies} = this.props;

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

const mapStateToProps = ({movies}) => ({
  movies
});

const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => dispatch(OperationCreator.loadMovies()),
  checkAuthorization: () => dispatch(OperationCreator.checkAuthorization())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

// Я не знаю как это тестить. Пытался мокнуть api, но не вышло. Из-за этого от теста нет толк, так как компонент всегда будет возвращать null
