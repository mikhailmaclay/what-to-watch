import {Config} from '../../constants/consts';

function padEndWithZero(number) {
  return Number(number) >= 10 ? String(number) + `.0` : String(number).padEnd(Config.MOVIE_SCORE_PRECISION, `.0`);
}

export default padEndWithZero;
