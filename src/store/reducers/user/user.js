import ActionType from '../../action-type';
import extend from '../../../utils/objects/extend';

function user(state = null, action) {
  const {type: actionType, payload} = action;

  switch (actionType) {
    case ActionType.AUTHORIZE:
      return payload;

    case ActionType.DEAUTHORIZE:
      return null;

    case ActionType.LOAD_MY_LIST:
      return extend(state, {myList: payload});

    default:
      return state;
  }
}

export default user;
