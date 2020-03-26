// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import MoviePromo from './movie-promo';

const mockStore = configureStore([]);

const movie = {
  id: 1,
  name: `What We Do in the Shadows`,
  genre: `Comedy`,
  releaseDate: `2019`,
  description: [
    `A look into the daily (or rather, nightly) lives of three vampires who\`ve lived together for over 100 years, in Staten Island.`
  ],
  runTime: 30,
  team: [
    {
      fullName: `Jemaine Clement`,
      role: `Director`
    },
    {
      fullName: `Kayvan Novak`,
      role: `Actor`
    },
    {
      fullName: `Matt Berry`,
      role: `Actor`
    },
    {
      fullName: `Natasia Demetriou`,
      role: `Actor`
    }
  ],
  poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/What-We-Do-in-the-Shadows.jpg`,
  images: [
    `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/what-we-do-in-the-shadows.jpg`
  ],
  background: [
    `#A39E81`,
    `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/What-We-Do-in-the-Shadows.jpg`
  ],
  rating: 7.2,
  scoresCount: 6173,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  video: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  isInMyList: false,
  reviews: null
};

describe(`<MoviePromo/>`, () => {
  const store = mockStore({
    user: {id: 1, email: `johndoe@gmail.com`, name: `John Doe`, avatar: ``},
  });

  const props = {
    specialMovie: movie,
    changeMovieStatus: jest.fn()
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <MoviePromo {...props}/>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
