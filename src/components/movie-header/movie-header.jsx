// Libraries
import React from 'react';
import {Link} from 'react-router-dom';
// PropTypes
import propTypes from './movie-header.prop-types';
// Constants and utils
import {Config, PathName} from '../../consts';
import getDate from '../../utils/time/get-date';
// Components
import Button from '../button/button';
import Header from '../header/header';
import Icon from '../icon/icon';

function MovieHeader({id, name, background, genre, releaseDate}) {
  return (
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={background} alt={name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{getDate(Config.MOVIE_PROMO_RELEASE_DATE_FORMAT)(releaseDate)}</span>
          </p>
          <div className="movie-card__buttons">
            <Link to={PathName.WATCH + id} className="btn btn--play movie-card__button">
              <Icon name="play-s" width="19" height="19"/>
              <span>Play</span>
            </Link>
            <Button className="btn btn--list movie-card__button">
              <Icon name="add" width="19" height="20"/>
              <span>My list</span>
            </Button>
            <Link to={PathName.ADD_REVIEW} className="btn movie-card__button">Add review</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieHeader.propTypes = propTypes;

export default React.memo(MovieHeader);
