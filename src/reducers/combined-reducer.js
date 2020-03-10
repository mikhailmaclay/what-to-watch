// Constants and utils
import extend from '../utils/objects/extend';
// ActionType
import ActionType from '../actions/action-type';

const combinedReducer = (state = {}, action) => {
  const {type: actionType, payload} = action;

  switch (actionType) {
    case ActionType.SET_GENRE_FILTER:
      return extend(state, {currentGenre: payload});

    case ActionType.RESET_GENRE_FILTER:
      return extend(state, {currentGenre: null});

    default:
      return state;
  }
};

export default combinedReducer;
