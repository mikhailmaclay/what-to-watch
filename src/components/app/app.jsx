// Libraries
import React from 'react';
import {PathName} from '../../consts';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
// PropTypes
import propTypes from './app.prop-types';
// Components
import MainContainerWrapped, {MainContainer} from '../main/main.container';
import MoviePageContainerWrapped from '../movie-page/movie-page.container';

function App({movies}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={PathName.ROOT} exact>
          <MainContainer movies={movies}/>
        </Route>
        <Route path={`${PathName.MOVIE_FILTER}`} exact>
          <MainContainerWrapped movies={movies}/>
        </Route>
        <Route path={`${PathName.MOVIE_PAGE}:id`}>
          <MoviePageContainerWrapped movies={movies}/>
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
