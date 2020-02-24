// Libraries
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Components
import MoviePromo from './movie-promo';

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

const handleMovieCardTitleClick = jest.fn();

it(`<MoviePromo/>: the special movie card's title should get clicked`, () => {
  const moviePromo = shallow(
      <MoviePromo specialMovie={specialMovie} onMovieCardTitleClick={handleMovieCardTitleClick}/>
  );

  const movieCardTitle = moviePromo.find(`.movie-card__title`);

  movieCardTitle.simulate(`click`);

  expect(handleMovieCardTitleClick).toHaveBeenCalledTimes(1);
});
