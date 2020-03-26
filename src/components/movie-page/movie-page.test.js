// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
// Components
import MoviePage from './movie-page';
//
import history from '../../history';
import {PathName} from '../../constants/consts';

const FIRST_MOVIE_INDEX = 0;

const mockStore = configureStore([]);

const movie = {
  id: 1,
  name: `Shutter Island`,
  genre: `Thriller`,
  releaseDate: `2010`,
  description: [
    `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`
  ],
  runTime: 138,
  directors: [
    `Martin Scorsese`
  ],
  actors: [
    `Leonardo DiCaprio`,
    `Emily Mortimer`,
    `Mark Ruffalo`
  ],
  poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Shutter_Island.jpg`,
  images: [
    `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/shutter-island.jpg`
  ],
  background: [
    `#977461`,
    `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Shutter_Island.jpg`
  ],
  rating: 4.1,
  scoresCount: 1002557,
  level: `Not bad, not bad...`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  isInMyList: false,
  similarMovies: []
};

describe(`<MoviePage/>`, () => {
  const store = mockStore({
    movies: [
      movie
    ]
  });

  const props = {
    movie: store.getState().movies[FIRST_MOVIE_INDEX],
    baseURL: PathName.MOVIE_PAGE + store.getState().movies[FIRST_MOVIE_INDEX].id,
    changeMovieStatus: () => {}
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <MoviePage {...props}/>
          </Router>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
