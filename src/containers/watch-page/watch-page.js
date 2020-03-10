// Libraries
import React from 'react';
// PropTypes
import propTypes from './watch-page.prop-types';
// Constants and utils
import {PathName} from '../../consts';
import createHOC from '../../utils/components/create-hoc';
import getMovieById from '../../utils/data/filters/get-movie-by-id';
// Components
import WatchPage from '../../components/watch-page/watch-page';

function WatchPageContainer({movies, isAutoPlay, isLooped, /* withRouter: */ match, history}) {
  const movieId = parseInt(match.params.id, 10);
  const movie = getMovieById(movieId)(movies);

  const propsToComponent = {
    isAutoPlay,
    isLooped,
    id: movie.id,
    name: movie.name,
    releaseDate: movie.releaseDate,
    preview: movie.preview,
    background: movie.background,
    onClose: () => history.push(PathName.MOVIE_PAGE + movieId)
  };

  return React.createElement(WatchPage, propsToComponent);
}

WatchPageContainer.propTypes = propTypes;

const WatchPageContainerMemo = React.memo(WatchPageContainer);
const WatchPageContainerWrapped = createHOC(`withRouter`)(WatchPageContainerMemo);

export default WatchPageContainerWrapped;
export {WatchPageContainer, WatchPageContainerMemo};
