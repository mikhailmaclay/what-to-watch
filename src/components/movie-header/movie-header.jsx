// Libraries
import React from 'react';
import {Link} from 'react-router-dom';
// PropTypes
import propTypes from './movie-header.prop-types';
// Constants and utils
import {PathName} from '../../consts';
// Components
import Button from '../button/button';
import Header from '../header/header';

function MovieHeader({name, background, genre, releaseDate}) {
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
            <span className="movie-card__year">{releaseDate}</span>
          </p>
          <div className="movie-card__buttons">
            <Button className="btn btn--play movie-card__button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </Button>
            <Button className="btn btn--list movie-card__button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"/>
              </svg>
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
