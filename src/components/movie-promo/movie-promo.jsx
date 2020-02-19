// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-promo.prop-types';
// Components
import Header from '../header/header';
import Button from '../button/button';
import MoviePoster from '../movie-poster/movie-poster';

function MoviePromo({specialMovie, onMovieCardTitleClick}) {
  const {name, genre, releaseDate, poster, background} = specialMovie;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={background} alt={name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <MoviePoster className="movie-card__poster" src={poster} alt={name}/>
          <div className="movie-card__desc">
            <h2 className="movie-card__title" onClick={onMovieCardTitleClick}>{name}</h2>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

MoviePromo.propTypes = propTypes;

export default MoviePromo;
