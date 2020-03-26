// Libraries
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// PropTypes
import propTypes from './watch-page.prop-types';
// Constants and utils
import {PathName} from '../../constants/consts';
import selectMovieByID from '../../utils/data/selectors/select-movie-by-id';
// Components
import WatchPage from '../../components/watch-page/watch-page';
import history from '../../history';
import createHOC from '../../utils/components/create-hoc';

function WatchPageContainer({movies, /* withRouter: */ match}) {
  const movieID = parseInt(match.params.id, 10);
  const movie = selectMovieByID(movieID)(movies);

  if (!movie) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const propsToComponent = {
    name: movie.name,
    video: movie.video,
    background: movie.background,
    onClose: () => history.push(PathName.MOVIE_PAGE + movieID)
  };

  return <WatchPage {...propsToComponent}/>;
}

WatchPageContainer.propTypes = propTypes;

const mapStateToProps = ({movies}) => ({movies});

const WatchPageContainerWrapped = createHOC(`withRouter`)(WatchPageContainer);

export default connect(mapStateToProps)(WatchPageContainerWrapped);
