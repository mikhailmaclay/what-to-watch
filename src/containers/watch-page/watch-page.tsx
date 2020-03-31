// Libraries
import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// Constants and utils
import {PathName} from '../../constants/consts';
import selectMovieByID from '../../utils/data/selectors/select-movie-by-id';
import createHOC from '../../utils/components/create-hoc';
// Components
import WatchPage from '../../components/watch-page/watch-page';
//
import history from '../../history';
import {Movie} from '../../types';

interface Props {
  movies: Movie[];
  match: {params: {id: string}};
}

function WatchPageContainer(props: Props) {
  const {movies, match} = props;
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

const mapStateToProps = ({movies}) => ({movies});

const WatchPageContainerWrapped = createHOC(`withRouter`)(WatchPageContainer);

export default connect(mapStateToProps)(WatchPageContainerWrapped);
