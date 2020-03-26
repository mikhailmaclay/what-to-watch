import ActionType from '../../action-type';

const notification = (state = null, action) => {
  const {type: actionType, payload} = action;

  switch (actionType) {
    case ActionType.SHOW_NOTIFICATION:
      return payload;

    case ActionType.HIDE_NOTIFICATION:
      return null;

    default:
      return state;
  }
};

export default notification;
