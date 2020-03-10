import {ExtractorName} from '../../../consts';
import getExtractor from './get-extractor';

function getRatings(movie) {
  return getExtractor(ExtractorName.MOVIE.RATINGS)(movie);
}

export default getRatings;
