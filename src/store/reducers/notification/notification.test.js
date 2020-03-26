import ActionCreator from '../../actions/action-creator';
import notification from './notification';

const mockNotification = {
  title: `Hello World!`,
  content: `Here we are!`
};

describe(`notification`, () => {
  it(`On SHOW_NOTIFICATION should work correctly`, () => {
    expect(notification(null, ActionCreator.showNotification(mockNotification.title, mockNotification.content))).toEqual(mockNotification);
  });

  it(`On HIDE_NOTIFICATION should work correctly`, () => {
    expect(notification(mockNotification, ActionCreator.hideNotification())).toEqual(null);
  });
});
