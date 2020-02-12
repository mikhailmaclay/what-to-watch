import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main';

configure({
  adapter: new Adapter()
});

const specialMovie = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  releaseDate: `2014`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  background: `img/bg-the-grand-budapest-hotel.jpg`
};

it(`<Main/>: the special movie card's title should get clicked`, () => {
  const onMovieCardTitleClick = jest.fn();

  const main = shallow(
      <Main specialMovie={specialMovie} movies={[]} onMovieCardTitleClick={onMovieCardTitleClick}/>
  );

  const movieCardTitle = main.find(`.movie-card__title`);

  movieCardTitle.props().onClick();

  expect(onMovieCardTitleClick.mock.calls.length).toBe(1);
});
