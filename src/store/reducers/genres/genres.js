import ActionType from '../../action-type';

function genres(state = null, action) {
  const {type: actionType, payload} = action;

  switch (actionType) {
    case ActionType.LOAD_GENRES:
      return payload;

    default:
      return state;
  }
}

export default genres;
