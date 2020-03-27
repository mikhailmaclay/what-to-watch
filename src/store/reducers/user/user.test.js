import ActionCreator from '../../actions/action-creator';
import user from './user';

const mockUser = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatar: `img/1.png`,
  myList: null
};

describe(`user`, () => {
  it(`On AUTHORIZE should work correctly`, () => {
    expect(user(null, ActionCreator.authorize(mockUser))).toEqual(mockUser);
  });

  it(`On DEAUTHORIZE should work correctly`, () => {
    expect(user(mockUser, ActionCreator.deauthorize())).toEqual(null);
  });
});
