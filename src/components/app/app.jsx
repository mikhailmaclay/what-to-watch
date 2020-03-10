// Libraries
import React from 'react';
import {PathName} from '../../consts';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
// PropTypes
import propTypes from './app.prop-types';
// Components
import MainContainer from '../../containers/main';
import MoviePageContainerWrapped from '../../containers/movie-page/movie-page';
import VideoPlayerContainerWrapped from '../../containers/watch-page/watch-page';

function App({movies}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={PathName.ROOT} exact>
          <MainContainer movies={movies}/>
        </Route>
        <Route path={`${PathName.MOVIE_PAGE}:id`}>
          <MoviePageContainerWrapped movies={movies}/>
        </Route>
        <Route path={`${PathName.WATCH}:id`} exact>
          <VideoPlayerContainerWrapped movies={movies} isAutoPlay isLooped/>
        </Route>
        <Route>
          <Redirect to={PathName.ROOT}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = propTypes;

export default React.memo(App);
