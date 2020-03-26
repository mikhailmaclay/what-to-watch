import ActionCreator from '../../actions/action-creator';
import genres from './genres';

const mockGenres = [
  `Horror`,
  `Action`,
  `Drama`
];

describe(`genres`, () => {
  it(`On LOAD_GENRES should work correctly`, () => {
    expect(genres(null, ActionCreator.loadGenres(mockGenres))).toEqual(mockGenres);
  });
});
