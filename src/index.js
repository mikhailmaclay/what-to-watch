import React from 'react';
import reactDOM from 'react-dom';

import App from './components/app/app';

const specialMovie = {
  name: `Shawshank's Eleven`,
  genre: `Criminal`,
  releaseDate: `2001`
};

reactDOM.render(<App specialMovie={specialMovie}/>, document.getElementById(`root`));
