import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main';

Enzyme.configure({
  adapter: new Adapter()
});

const specialMovie = {
  name: `Forward to the Past`,
  genre: `Adventure`,
  releaseDate: `1985`
};

it(`<Main/>: the special movie card's title should get clicked`, () => {
  const onMovieCardTitleClick = jest.fn();

  const main = shallow(
      <Main specialMovie={specialMovie} onMovieCardTitleClick={onMovieCardTitleClick}/>
  );

  const movieCardTitle = main.find(`.movie-card__title`);

  movieCardTitle.props().onClick();

  expect(onMovieCardTitleClick.mock.calls.length).toBe(1);
});
