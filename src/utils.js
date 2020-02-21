import moment from 'moment';

import {Config, FilterName} from './consts';

const PLURALIZE_CASES = [2, 0, 1, 1, 1, 2];
const PRECISION_COMPENSATION_FOR_TO_FIXED = -2;
const MS_IN_ONE_SEC = 1000;
const SECS_IN_ONE_MINUTE = 60;

// Composition functions
export const compose = (...functions) => (argument) => functions.reduce((accumulator, currentFunction) => currentFunction(accumulator), argument);

// Working with components
export const bind = (thisArg, ...functions) => {
  functions.forEach((currentFunction) => {
    thisArg[currentFunction.name] = currentFunction.bind(thisArg);
  });
};
export const getDisplayName = (component) => {
  return component.displayName || component.name || `Component`;
};
export const getLabeledDisplayName = (label, component) => {
  return `${label}(${getDisplayName(component)})`;
};

export const excludeProps = (props = {}, propNames = []) => {
  const temp = {};

  Object.keys(props).forEach((propName) => {
    if (!propNames.includes(propName)) {
      temp[propName] = props[propName];
    }
  });

  return temp;
};

// Working with numbers
export const getArithmeticMean = (numbers = [], precision = 1) => {
  const numbersSumm = numbers.reduce((summ, number) => summ + number, 0);

  return numbersSumm && parseFloat((numbersSumm / numbers.length).toFixed(precision + PRECISION_COMPENSATION_FOR_TO_FIXED));
};
export const pluralize = (number, word) => {
  return word[(number % 100 > 4 && number % 100 < 20) ? 2 : PLURALIZE_CASES[(number % 10 < 5) ? number % 10 : 5]];
};
export const getLevelFromNumber = (number, milestones) => {
  for (let milestone of Object.keys(milestones).reverse()) {
    if (number >= parseInt(milestone, 10)) {
      return milestones[milestone];
    }
  }

  return ``;
};

// Working with strings
export const formatToUrl = (string) => string.replace(/\s/g, `-`).replace(/[^-\w]/g, ``).replace(`--`, `-`).toLowerCase();
export const formatScore = (score) => score >= 10 ? score + `.0` : String(score).padEnd(Config.MOVIE_SCORE_PRECISION, `.0`);

// Working with arrays
export const splitArray = (array) => {
  const halfOfArrayLength = Math.ceil(array.length / 2);

  const temp = [];
  const [first, second] = [array.slice(0, halfOfArrayLength), array.slice(halfOfArrayLength)];

  if (first.length) {
    temp.push(first);
  }

  if (second.length) {
    temp.push(second);
  }

  return temp;
};

// Working with date
export const getYear = (date) => new Date(date).getFullYear();
export const getDate = (date) => {
  const dateObj = new Date(date);

  return moment(dateObj).format(`MMMM DD, YYYY`);
};
export const getDuration = (duration) => {
  const start = new Date();
  const end = new Date(start.getTime() + (duration * MS_IN_ONE_SEC * SECS_IN_ONE_MINUTE));
  const difference = moment(end).diff(moment(start));

  return moment.utc(difference).format(`H[h] mm[m]`);
};

//  Getting by id/ids
export const getUserById = (users, id) => users.find((user) => user.id === id);
export const getMovieById = (movies, id) => movies.find((movie) => movie.id === id);
export const getReviewsByIds = (reviews, ids) => reviews.filter(({id}) => ids.includes(id));

// Extracting specific items
export const getGenres = (movies) => {
  return movies.reduce((uniqueGenres, {genre: genreName}) => {
    const isUnique = !!uniqueGenres.find((genre) => genre.name === genreName);

    return isUnique ? uniqueGenres : [{name: genreName, url: formatToUrl(genreName)}, ...uniqueGenres];
  }, []);
};
export const getRatings = (reviews) => reviews.map(({rating}) => rating);
export const getDirector = (team) => getFilter(FilterName.Team.ROLE, `Director`)(team).map((member) => member.fullName).join(``);
export const getActors = (team) => getFilter(FilterName.Team.ROLE, `Actor`)(team).map((member) => member.fullName);

// Filtering
export const getFilter = (filterName, query) => {
  switch (filterName) {
    case FilterName.Movie.GENRE:
      return (movies) => movies.filter((movie) => movie.genre === query);

    case FilterName.Movie.EXCEPT_ID:
      return (movies) => movies.filter((movie) => movie.id !== query);

    case FilterName.Team.ROLE:
      return (team) => team.filter((teamMember) => teamMember.role === query);

    default:
      return (data) => data;
  }
};
export const getSimilarMovies = (movies, exceptId, genre, count) => compose(getFilter(FilterName.Movie.EXCEPT_ID, exceptId), getFilter(FilterName.Movie.GENRE, genre))(movies).slice(0, count);
export const filterByGenreSearch = (movies) => {
  const genres = getGenres(movies);
  const genreUrl = getGenreUrlSearchValue();
  const genreName = getGenreNameByUrl(genres, genreUrl);

  return getFilter(FilterName.Movie.GENRE, genreName)(movies);
};

// Not for export
function getGenreNameByUrl(genres, genreUrl) {
  const genreObj = genres.find((genre) => genre.url === genreUrl);

  return genreObj ? genreObj.name : ``;
}
function getGenreUrlSearchValue() {
  const {search} = location;
  const urlSearchParams = new URLSearchParams(search);
  const genreUrl = urlSearchParams.get(`genre`);

  return genreUrl || ``;
}
