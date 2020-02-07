import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';

function App({specialFilm}) {
  return <Main specialFilm={specialFilm}/>;
}

App.propTypes = {
  specialFilm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }).isRequired
};

export default App;
