import {ExtractorName} from '../../../consts';

function getExtractor(extractorName) {
  switch (extractorName) {
    case ExtractorName.MOVIES.GENRES:
      return (movies) => movies.reduce((uniqueGenres, {genre: genreName}) => {
        const isUnique = !uniqueGenres.includes(genreName);

        return isUnique ? [genreName, ...uniqueGenres] : uniqueGenres;
      }, []);

    case ExtractorName.MOVIE.RATINGS:
      return (movie) => movie.reviews.map(({rating}) => rating);

    case ExtractorName.MOVIE.TEAM:
      return (movie) => movie.team;

    default:
      return (data) => data;
  }
}

export default getExtractor;
