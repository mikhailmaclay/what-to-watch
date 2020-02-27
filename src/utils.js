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
export const reduceToPercents = (number) => {
  if (number < 0) {
    return 0;
  }

  if (number > 1) {
    return 1;
  }

  return number;
};

// Working with strings
export const formatToUrl = (string) => string.replace(/\s/g, `-`).replace(/[^-\w]/g, ``).replace(`--`, `-`).toLowerCase();
export const formatScore = (score) => score >= 10 ? score + `.0` : String(score).padEnd(Config.MOVIE_SCORE_PRECISION, `.0`);
export const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

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
export const convertToMap = (propertyNames, list) => {
  const [propertyName1, propertyName2] = propertyNames;

  const temp = {};

  list.forEach((item) => {
    temp[item[propertyName1]] = item[propertyName2];
  });

  return temp;
};

// Working with objects
export const extend = (...objects) => {
  const temp = {};

  objects.forEach((object) => Object.assign(temp, object));

  return temp;
};
export const clone = (object) => Object.assign({}, object);
export const join = (property, list1, list2) => {
  const tempList = list1.slice();

  if (Array.isArray(property)) {
    const [propertyName1, propertyName2] = property;

    tempList.forEach((item1, index) => {
      const tempItem1 = clone(item1);

      const item2 = list2.find((item) => tempItem1[propertyName1] === item[propertyName2]);

      if (!item2) {
        return;
      }

      tempItem1[propertyName1] = clone(item2);

      // delete tempItem1[propertyName1][propertyName2];

      tempList[index] = tempItem1;
    });
  } else if (typeof property === `string`) {
    tempList.forEach((item1, index) => {
      const item2 = list2.find((item) => item1 === item[property]);

      if (!item2) {
        return;
      }

      tempList[index] = clone(item2);
    });
  }

  return tempList;
};

// Working with url
export const isCurrentUrl = (url) => window.location.pathname + window.location.search === url;
export const extractUrlSearchParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  const temp = {};

  urlSearchParams.forEach((value, key) => {
    temp[key] = value;
  });

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
export const getTeamMembersByRole = (team, role) => getFilter(FilterName.Team.ROLE, role)(team).map((member) => member.fullName);

// Filtering
export const getFilter = (filterName, query) => {
  if (!query) {
    return (data) => data;
  }

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


