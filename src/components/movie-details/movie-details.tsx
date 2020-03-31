// Libraries
import * as React from 'react';
// Constants and utils
import {Config} from '../../constants/consts';
import getDate from '../../utils/time/get-date';
import getDuration from '../../utils/time/get-duration';
import pluralize from '../../utils/numbers/pluralize';

const DIRECTOR_WORD_FORMS = [`Director`, `Directors`, `Directors`];

interface Props {
  directors: string[];
  actors: string[];
  runTime: number;
  genre: string;
  releaseDate: string;
}

function MovieDetails(props: Props) {
  const {directors, actors, runTime, genre, releaseDate} = props;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">{pluralize(DIRECTOR_WORD_FORMS)(directors.length)}</strong>
          <span className="movie-card__details-value">
            {directors.map((director, index) => (
              <React.Fragment key={`${director}-${index}`}>
                {director}<br/>
              </React.Fragment>
            ))}
          </span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {actors.map((actor, index) => (
              <React.Fragment key={`${actor}-${index}`}>
                {actor}<br/>
              </React.Fragment>
            ))}
          </span>
        </p>
      </div>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getDuration(Config.MOVIE_DETAILS_RUN_TIME_FORMAT)(runTime).replace(/(:?^0h\s)|(:?\s0m$)/, ``)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{getDate(Config.MOVIE_DETAILS_RELEASE_DATE_FORMAT)(releaseDate)}</span>
        </p>
      </div>
    </div>
  );
}

export default React.memo(MovieDetails);
