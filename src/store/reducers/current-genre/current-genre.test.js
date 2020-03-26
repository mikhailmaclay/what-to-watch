import ActionCreator from '../../actions/action-creator';
import currentGenre from './current-genre';

describe(`currentGenre`, () => {
  it(`On SET_GENRE_FILTER should work correctly`, () => {
    expect(currentGenre(null, ActionCreator.setGenreFilter(`Horror`))).toEqual(`Horror`);
  });

  it(`On RESET_GENRE_FILTER should work correctly`, () => {
    expect(currentGenre(`Horror`, ActionCreator.resetGenreFilter())).toEqual(null);
  });
});
