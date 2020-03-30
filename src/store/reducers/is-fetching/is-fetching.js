import ActionType from '../../action-type';

function isFetching(state = false, action) {
  const {type: actionType} = action;

  switch (actionType) {
    case ActionType.START_FETCHING:
      return true;

    case ActionType.END_FETCHING:
      return false;

    default:
      return state;
  }
}

export default isFetching;
