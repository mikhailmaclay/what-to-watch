// Libraries
import React from 'react';
import {Config, PathName} from '../../consts';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
// PropTypes
import propTypes from './app.prop-types';
// Constants and utils
import {filterByGenreSearch, getGenres, getMovieById} from '../../utils';
// Components
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';

function App({movies, reviews, users}) {
  const specialMovie = getMovieById(movies, Config.SPECIAL_MOVIE_ID);
  const commonMovies = movies.filter(({id}) => id !== Config.SPECIAL_MOVIE_ID);
  const genres = getGenres(commonMovies);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={PathName.ROOT} exact>
          <Main specialMovie={specialMovie} genres={genres} movies={commonMovies} onMovieCardTitleClick={() => {}}/>
        </Route>
        <Route path={PathName.MOVIE_FILTER} exact>
          {() => {
            const filteredMovies = filterByGenreSearch(commonMovies);

            return <Main specialMovie={specialMovie} genres={genres} movies={filteredMovies} onMovieCardTitleClick={() => {}}/>;
          }}
        </Route>
        <Route path={`${PathName.MOVIE_PAGE}:id`}>
          {({match}) => (
            <MoviePage movies={movies} reviews={reviews} users={users} match={match}/>
          )}
        </Route>
        <Route>
          <Redirect to={PathName.ROOT}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = propTypes;

export default App;
