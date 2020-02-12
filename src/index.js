import React from 'react';
import reactDOM from 'react-dom';

import movies from './mocks/movies';

import App from './components/app/app';

reactDOM.render(<App movies={movies}/>, document.getElementById(`root`));
