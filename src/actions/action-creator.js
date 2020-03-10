// ActionType
import ActionType from './action-type';

const ActionCreator = {
  setGenreFilter: (genreName) => ({type: ActionType.SET_GENRE_FILTER, payload: genreName}),
  resetGenreFilter: () => ({type: ActionType.RESET_GENRE_FILTER})
};

export default ActionCreator;
