import ActionType from '../../action-type';
import extend from '../../../utils/objects/extend';

function specialMovie(state = null, action) {
  const {type: actionType, payload} = action;

  switch (actionType) {
    case ActionType.LOAD_SPECIAL_MOVIE:
      return payload;

    case ActionType.CHANGE_MOVIE_STATUS:
      if (state.id !== payload.id) {
        return state;
      }

      return extend(state, {isInMyList: payload.isInMyList});


    default:
      return state;
  }
}

export default specialMovie;
