import ActionType from '../../action-type';

function user(state = null, action) {
  const {type: actionType, payload} = action;

  switch (actionType) {
    case ActionType.AUTHORIZE:
      return payload;

    case ActionType.DEAUTHORIZE:
      return null;

    default:
      return state;
  }
}

export default user;
