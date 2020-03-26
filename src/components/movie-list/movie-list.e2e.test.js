// Libraries
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Constants and utils
import {Config} from '../../constants/consts';
// Components
import {MovieList} from './movie-list';

const TEST_MOVIES_COUNT = 16;

configure({adapter: new Adapter()});

const movies = new Array(TEST_MOVIES_COUNT).fill(``).map((movie, index) => ({
  id: index + 1,
  name: `Lorem Ipsum`,
  genre: `Test`,
  releaseDate: `January 1, 2020`,
  description: [
    `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ],
  runTime: 60,
  team: [
    {fullName: `Lorem Ipsum`, role: `Director`},
    {fullName: `Dolor Sit`, role: `Actor`},
    {fullName: `Consectetur Adipiscing`, role: `Actor`},
    {fullName: `Eiusmod Tempor`, role: `Actor`}
  ],
  reviews: [],
  poster: `https://via.placeholder.com/273x410`,
  images: [`https://via.placeholder.com/280x175`],
  background: `https://via.placeholder.com/1300x552`
}));

describe(`<MovieList/>`, () => {
  const props = {
    movies,
    isWithRenderedMovieCardsCounter: true,
    withCounter: {renderedMovieCards: {value: 8, increment: jest.fn()}} // withCounter
  };

  it(`click on th Show More button should call a callback and pass it a parameter with a number`, () => {
    const incrementRenderedMovieCards = props.withCounter.renderedMovieCards.increment;

    const movieList = shallow(
        <MovieList {...props}/>
    );

    movieList.find(`.catalog__button`).simulate(`click`, {button: 0});

    expect(incrementRenderedMovieCards).toHaveBeenCalledTimes(1);
    expect(incrementRenderedMovieCards.mock.calls[0][0]).toEqual(Config.MOVIE_CARDS_COUNT_BY_LOAD);
  });
});
