import {ExtractorName} from '../../../consts';
import getExtractor from './get-extractor';

function getGenres(movies) {
  return getExtractor(ExtractorName.MOVIES.GENRES)(movies);
}

export default getGenres;
