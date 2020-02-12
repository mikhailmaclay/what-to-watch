import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';

const SPECIAL_MOVIE_ID = 1;

function App({movies}) {
  const specialMovie = movies.find(({id}) => id === SPECIAL_MOVIE_ID);
  const commonMovies = movies.filter(({id}) => id !== SPECIAL_MOVIE_ID);

  return <Main specialMovie={specialMovie} movies={commonMovies} onMovieCardTitleClick={() => {}}/>;
}

App.propTypes = {
  movies: PropTypes.array.isRequired
};

export default App;
