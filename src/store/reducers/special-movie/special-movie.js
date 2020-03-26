import ActionType from '../../action-type';

function specialMovie(state = null, action) {
  const {type: actionType, payload} = action;

  switch (actionType) {
    case ActionType.LOAD_SPECIAL_MOVIE:
      return payload;

    default:
      return state;
  }
}

export default specialMovie;
