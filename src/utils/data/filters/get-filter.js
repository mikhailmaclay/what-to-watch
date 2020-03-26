import {FilterName} from '../../../constants/consts';

function getFilter(filterName, query) {
  if (!query) {
    return (data) => data;
  }

  switch (filterName) {
    case FilterName.MOVIES.GENRE:
      return (movies) => movies.filter((movie) => movie.genre === query);

    case FilterName.MOVIES.ID:
      return (movies) => movies.filter((movie) => movie.id === query);

    case FilterName.MOVIES.EXCEPT_ID:
      return (movies) => movies.filter((movie) => movie.id !== query);

    case FilterName.TEAM.ROLE:
      return (team) => team.filter((teamMember) => teamMember.role === query);

    case FilterName.REVIEWS.ID:
      return (reviews) => reviews.filter((review) => review.id === query);

    case FilterName.USERS.ID:
      return (users) => users.filter((user) => user.id === query);

    default:
      return (data) => data;
  }
}

export default getFilter;
