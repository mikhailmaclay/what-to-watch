import ActionType from '../../action-type';

function currentGenre(state = null, action) {
  const {type: actionType, payload} = action;

  switch (actionType) {
    case ActionType.SET_GENRE_FILTER:
      return payload;

    case ActionType.RESET_GENRE_FILTER:
      return null;

    default:
      return state;
  }
}

export default currentGenre;
