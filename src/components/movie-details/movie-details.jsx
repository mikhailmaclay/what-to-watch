// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-details.prop-types';
// Constants and utils
import {getYear, getDuration} from '../../utils';

function MovieDetails({director, actors, runTime, genre, releaseDate}) {
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
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
          <span className="movie-card__details-value">{getDuration(runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{getYear(releaseDate)}</span>
        </p>
      </div>
    </div>
  );
}

MovieDetails.propTypes = propTypes;

export default MovieDetails;
