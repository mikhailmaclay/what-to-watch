// Libraries
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// PropTypes
import propTypes from './movie-page.prop-types';
// Styles
import styles from './movie-page.styles';
// Constants and utils
import isCurrentURL from '../../utils/url/is-current-url';
// Containers
import MovieReviewsContainer from '../../containers/movie-reviews/movie-reviews';
// Components
import {MovieListMemo} from '../movie-list/movie-list';
import Footer from '../footer/footer';
import MoviePoster from '../movie-poster/movie-poster';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieHeader from '../movie-header/movie-header';
import Link from '../link/link';

const ACTIVE_MENU_ITEM_CLASS_NAME = `movie-nav__item--active`;

function MoviePage({movie, baseURL, changeMovieStatus}) {
  const {id, name, genre, releaseDate, description, runTime, directors, actors, rating, scoresCount, level, poster, background, similarMovies, isInMyList} = movie;

  const detailsPathname = `${baseURL}/details`;
  const reviewsPathname = `${baseURL}/reviews`;

  const renderNavigation = () => (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${isCurrentURL(baseURL) ? ACTIVE_MENU_ITEM_CLASS_NAME : ``}`}>
          <Link to={baseURL} style={styles.tabLink(isCurrentURL(baseURL))} className="movie-nav__link">Overview</Link>
        </li>
        <li className={`movie-nav__item ${isCurrentURL(detailsPathname) ? ACTIVE_MENU_ITEM_CLASS_NAME : ``}`}>
          <Link to={detailsPathname} style={styles.tabLink(isCurrentURL(detailsPathname))} className="movie-nav__link">Details</Link>
        </li>
        <li className={`movie-nav__item ${isCurrentURL(reviewsPathname) ? ACTIVE_MENU_ITEM_CLASS_NAME : ``}`}>
          <Link to={reviewsPathname} style={styles.tabLink(isCurrentURL(reviewsPathname))} className="movie-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      <section className="movie-card movie-card--full">
        <MovieHeader id={id} name={name} releaseDate={releaseDate} genre={genre} background={background} changeMovieStatus={changeMovieStatus} isInMyList={isInMyList}/>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <MoviePoster className="movie-card__poster movie-card__poster--big" src={poster} alt={name}/>
            <div className="movie-card__desc">
              {renderNavigation()}
              <Switch>
                <Route path={baseURL} exact>
                  <MovieOverview actors={actors} rating={rating} scoresCount={scoresCount} level={level} directors={directors} description={description}/>
                </Route>
                <Route path={detailsPathname} exact>
                  <MovieDetails releaseDate={releaseDate} genre={genre} actors={actors} runTime={runTime} directors={directors}/>
                </Route>
                <Route path={reviewsPathname} exact>
                  <MovieReviewsContainer movieID={id}/>
                </Route>
                <Route>
                  <Redirect to={baseURL}/>
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
            <MovieListMemo movies={similarMovies}/>
          </section>
        }
        <Footer/>
      </div>
    </>
  );
}

MoviePage.propTypes = propTypes;

export default React.memo(MoviePage);
