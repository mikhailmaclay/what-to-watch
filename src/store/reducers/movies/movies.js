import ActionType from '../../action-type';
import movie from '../movie/movie';

function movies(state = null, action) {
  const {type: actionType, payload} = action;

  switch (actionType) {
    case ActionType.LOAD_MOVIES:
      return payload;

    case ActionType.LOAD_REVIEWS:
      return state.map((movieState) => movie(movieState, action));

    default:
      return state;
  }
}

export default movies;
