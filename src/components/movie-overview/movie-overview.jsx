// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-overview.prop-types';
// Constants and utils
import {Config} from '../../consts';
import {pluralize, formatScore} from '../../utils';

const RATING_WORD_FORMS = [`rating`, `ratings`, `ratings`];
const DIRECTOR_WORD_FORMS = [`Director`, `Directors`, `Directors`];

function MovieOverview({score, ratingsCount, level, description, directors, actors}) {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{formatScore(score)}</div>
        <p className="movie-rating__meta">
          {!!ratingsCount &&
            <span className="movie-rating__level">{level}</span>
          }
          <span className="movie-rating__count">{ratingsCount ? `${ratingsCount} ${pluralize(ratingsCount, RATING_WORD_FORMS)}` : `No ratings`}</span>
        </p>
      </div>
      <div className="movie-card__text">
        {description.map((sentence, index) => <p key={`${sentence.length}-${index}`}>{sentence}</p>)}
        <p className="movie-card__director"><b>{pluralize(directors.length, DIRECTOR_WORD_FORMS)}: {directors.join(`, `)}</b></p>
        <p className="movie-card__starring"><b>Starring: {actors.slice(0, Config.MOVIE_OVERVIEW_ACTORS_COUNT).join(`, `)}{actors.length > Config.MOVIE_OVERVIEW_ACTORS_COUNT && ` and other`}</b></p>
      </div>
    </>
  );
}

MovieOverview.propTypes = propTypes;

export default MovieOverview;
