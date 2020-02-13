import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {movieRatingLevelMap} from '../../consts';
import {getArithmeticMean, getLevelFromNumber, pluralize} from '../../utils';

import MovieList from '../movie-list/movie-list';

const SCORE_PRECISION = 2;
const DEFAULT_SCORE = 0;
const MAX_ACTORS_COUNT = 4;
const MAX_SIMILAR_MOVIES_COUNT = 4;
const RATING_WORD_FORMS = [`rating`, `ratings`, `ratings`];

function MoviePage({movies, match}) {
  const movieId = parseInt(match.params.id, 10);

  const movie = movies.find(({id}) => id === movieId);

  if (!movie) {
    return <Redirect to="/"/>;
  }

  const similarMovies = movies.filter(({id, genre}) => id !== movie.id && genre === movie.genre).slice(0, MAX_SIMILAR_MOVIES_COUNT);

  const {name, genre, releaseDate, description, team, ratings, poster, background} = movie;

  const arithmeticMeanScore = ratings ? getArithmeticMean(ratings, SCORE_PRECISION) : DEFAULT_SCORE;

  const director = team.find((member) => member.role === `Director`).fullName;
  const actors = team.filter((member) => member.role === `Actor`).map((member) => member.fullName);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={name} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>
              <div className="movie-rating">
                <div className="movie-rating__score">{arithmeticMeanScore}</div>
                <p className="movie-rating__meta">
                  {ratings.length ? <span className="movie-rating__level">{getLevelFromNumber(arithmeticMeanScore, movieRatingLevelMap)}</span> : null}
                  <span className="movie-rating__count">{ratings.length ? `${ratings.length} ${pluralize(ratings.length, RATING_WORD_FORMS)}` : `No ratings`}</span>
                </p>
              </div>
              <div className="movie-card__text">
                {description.map((sentence, index) => <p key={`${sentence.length}-${index}`}>{sentence}</p>)}

                <p className="movie-card__director"><b>Director: {director}</b></p>

                <p className="movie-card__starring"><b>Starring: {actors.slice(0, MAX_ACTORS_COUNT).join(`, `)}{actors.length > MAX_ACTORS_COUNT && ` and other`}</b></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        {similarMovies.length ? (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieList movies={similarMovies}/>
          </section>
        ) : null}
        <footer className="page-footer">
          <div className="logo">
            <a href="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

MoviePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    team: PropTypes.arrayOf(PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired
    })).isRequired,
    ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  })).isRequired,
  match: PropTypes.object.isRequired
};

export default MoviePage;
