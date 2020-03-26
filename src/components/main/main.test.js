// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import Main from './main';
//
import history from '../../history';

const mockStore = configureStore([]);

const movies = [
  {
    id: 1,
    name: `Shutter Island`,
    genre: `Thriller`,
    releaseDate: `2010`,
    description: [
      `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`
    ],
    runTime: 138,
    team: [
      {
        fullName: `Martin Scorsese`,
        role: `Director`
      },
      {
        fullName: `Leonardo DiCaprio`,
        role: `Actor`
      },
      {
        fullName: `Emily Mortimer`,
        role: `Actor`
      },
      {
        fullName: `Mark Ruffalo`,
        role: `Actor`
      }
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
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    isInMyList: false,
    reviews: null
  },
  {
    id: 2,
    name: `War of the Worlds`,
    genre: `Adventure`,
    releaseDate: `2005`,
    description: [
      `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`
    ],
    runTime: 116,
    team: [
      {
        fullName: `Steven Spielberg`,
        role: `Director`
      },
      {
        fullName: `Tom Cruise`,
        role: `Actor`
      },
      {
        fullName: `Dakota Fanning`,
        role: `Actor`
      },
      {
        fullName: `Tim Robbins`,
        role: `Actor`
      }
    ],
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/War_of_the_Worlds.jpg`,
    images: [
      `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/war-of-the-worlds.jpg`
    ],
    background: [
      `#9B7E61`,
      `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/War_of_the_Worlds.jpg`
    ],
    rating: 9.3,
    scoresCount: 386834,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    isInMyList: false,
    reviews: null
  }
];

describe(`<Main/>`, () => {
  const store = mockStore({
    movies
  });

  const props = {
    movies: store.getState().movies
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <Main {...props}/>
          </Router>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
