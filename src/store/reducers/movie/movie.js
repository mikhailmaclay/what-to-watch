import ActionType from '../../action-type';
import extend from '../../../utils/objects/extend';

function movie(state = {}, action) {
  const {type: actionType, payload} = action;

  switch (actionType) {
    case ActionType.LOAD_REVIEWS:
      if (state.id !== payload.id) {
        return state;
      }

      return extend(state, {reviews: payload.reviews});

    case ActionType.CHANGE_MOVIE_STATUS:
      if (state.id !== payload.id) {
        return state;
      }

      return extend(state, {isInMyList: payload.isInMyList});

    default:
      return state;
  }
}

export default movie;
