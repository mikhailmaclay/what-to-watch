import ActionCreator from '../../actions/action-creator';
import isFetching from './is-fetching';

describe(`isFetching`, () => {
  it(`On START_FETCHING should work correctly`, () => {
    expect(isFetching(false, ActionCreator.startFetching())).toEqual(true);
  });

  it(`On END_FETCHING should work correctly`, () => {
    expect(isFetching(true, ActionCreator.endFetching())).toEqual(false);
  });
});
