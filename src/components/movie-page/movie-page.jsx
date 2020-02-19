// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-page.prop-types';
// Constants and utils
import {Config, PathName} from '../../consts';
import {
  getDirector,
  getArithmeticMean,
  getMovieById,
  getSimilarMovies,
  getActors,
  getLevelFromNumber,
  getReviewsByIds,
  getRatings
} from '../../utils';
// Components
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';
import MoviePoster from '../movie-poster/movie-poster';
import Header from '../header/header';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import MovieOverview from '../movie-overview/movie-overview';
// HOCs
import withStateUpdateOnHover from '../../hocs/with-state-update-on-hover';
// Data
import reviews from '../../mocks/reviews';

const ACTIVE_MENU_ITEM_CLASS_NAME = `movie-nav__item--active`;

const MovieListWithStateUpdateOnHover = withStateUpdateOnHover(MovieList);

function MoviePage({movies, match}) {
  const movieId = parseInt(match.params.id, 10);

  const movie = getMovieById(movies, movieId);

  if (!movie) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const {name, genre, releaseDate, description, runTime, team, reviews: reviewsIds, poster, background} = movie;
  const {pathname} = location;

  const basePathname = `${PathName.MOVIE_PAGE}${movieId}`;
  const detailsPathname = `${basePathname}/details`;
  const reviewsPathname = `${basePathname}/reviews`;

  const similarMovies = getSimilarMovies(movies, movieId, genre, Config.SIMILAR_MOVIES_COUNT);

  const thisReviews = getReviewsByIds(reviews, reviewsIds);
  const ratings = getRatings(thisReviews);
  const score = getArithmeticMean(ratings, Config.MOVIE_SCORE_PRECISION);
  const level = getLevelFromNumber(score, Config.MOVIE_LEVEL_MAP);
  const director = getDirector(team);
  const actors = getActors(team);

  const renderNavigation = () => (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${pathname === basePathname && ACTIVE_MENU_ITEM_CLASS_NAME}`}>
          <Link to={basePathname} className="movie-nav__link">Overview</Link>
        </li>
        <li className={`movie-nav__item ${pathname === detailsPathname && ACTIVE_MENU_ITEM_CLASS_NAME}`}>
          <Link to={detailsPathname} className="movie-nav__link">Details</Link>
        </li>
        <li className={`movie-nav__item ${pathname === reviewsPathname && ACTIVE_MENU_ITEM_CLASS_NAME}`}>
          <Link to={reviewsPathname} className="movie-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      <section className="movie-card movie-card--full">
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
                <Link to={PathName.ADD_REVIEW} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <MoviePoster className="movie-card__poster movie-card__poster--big" src={poster} alt={name}/>
            <div className="movie-card__desc">
              {renderNavigation()}
              <Switch>
                <Route path={basePathname} exact>
                  <MovieOverview actors={actors} score={score} level={level} ratingsCount={ratings.length} director={director} description={description}/>
                </Route>
                <Route path={detailsPathname} exact>
                  <MovieDetails releaseDate={releaseDate} genre={genre} actors={actors} runTime={runTime} director={director}/>
                </Route>
                <Route path={reviewsPathname} exact>
                  <MovieReviews reviews={thisReviews}/>
                </Route>
                <Route>
                  <Redirect to={basePathname}/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        {!!similarMovies.length &&
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieListWithStateUpdateOnHover movies={similarMovies}/>
          </section>
        }
        <Footer/>
      </div>
    </>
  );
}

MoviePage.propTypes = propTypes;

export default MoviePage;
