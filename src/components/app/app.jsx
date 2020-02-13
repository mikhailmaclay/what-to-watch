import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';

const SPECIAL_MOVIE_ID = 1;

function App({movies}) {
  const specialMovie = movies.find(({id}) => id === SPECIAL_MOVIE_ID);
  const commonMovies = movies.filter(({id}) => id !== SPECIAL_MOVIE_ID);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main specialMovie={specialMovie} movies={commonMovies} onMovieCardTitleClick={() => {}}/>
        </Route>
        <Route path="/:id" exact>
          {({match}) => (
            <MoviePage movies={movies} match={match}/>
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired
};

export default App;
