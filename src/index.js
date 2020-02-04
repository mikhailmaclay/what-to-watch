import React from 'react';
import reactDOM from 'react-dom';

import App from './components/app';

const specialFilm = {
  name: `Shawshank's Eleven`,
  genre: `Criminal`,
  releaseDate: `2001`
};

reactDOM.render(<App specialFilm={specialFilm}/>, document.getElementById(`root`));
