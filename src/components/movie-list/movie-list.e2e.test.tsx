// Libraries
import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
// Constants and utils
import {Config} from '../../constants/consts';
// Components
import {MovieList} from './movie-list';
//
import {mockMovie} from '../../test-mock-data';

const TEST_MOVIES_COUNT = 16;

configure({adapter: new Adapter()});

const movies = new Array(TEST_MOVIES_COUNT).fill(``).map(() => (mockMovie));

describe(`<MovieList/>`, () => {
  const props = {
    movies,
    withCounter: {renderedMovieCards: {value: 8, increment: jest.fn()}} // withCounter
  };

  it(`Click on the Show More button should call a callback and pass it a parameter with a number`, () => {
    const incrementRenderedMovieCards = props.withCounter.renderedMovieCards.increment;

    const movieList = shallow(
        <MovieList {...props}/>
    );

    movieList.find(`.catalog__button`).simulate(`click`, {button: 0});

    expect(incrementRenderedMovieCards).toHaveBeenCalledTimes(1);
    expect(incrementRenderedMovieCards.mock.calls[0][0]).toEqual(Config.MOVIE_CARDS_COUNT_BY_LOAD);
  });
});
