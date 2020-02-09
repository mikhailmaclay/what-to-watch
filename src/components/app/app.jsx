import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';

function App({specialMovie}) {
  const onMovieCardTitleClick = () => {};

  return <Main specialMovie={specialMovie} onMovieCardTitleClick={onMovieCardTitleClick}/>;
}

App.propTypes = {
  specialMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }).isRequired
};

export default App;
