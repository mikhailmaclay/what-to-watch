// Libraries
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// PropTypes
import propTypes from './movie-page.prop-types';
// Constants and utils
import {PathName} from '../../consts';
import {isCurrentUrl} from '../../utils';
// Components
import {MovieListMemo} from '../movie-list/movie-list';
import Footer from '../footer/footer';
import MoviePoster from '../movie-poster/movie-poster';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';
import MovieHeader from '../movie-header/movie-header';
import Link from '../link/link';

const ACTIVE_MENU_ITEM_CLASS_NAME = `movie-nav__item--active`;

function MoviePage({movie, baseUrl, /* withRouter: */ history}) {
  if (!movie) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const {name, genre, releaseDate, description, runTime, directors, actors, reviews, score, level, poster, background, similarMovies} = movie;

  const detailsPathname = `${baseUrl}/details`;
  const reviewsPathname = `${baseUrl}/reviews`;

  const renderNavigation = () => (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${isCurrentUrl(baseUrl) && ACTIVE_MENU_ITEM_CLASS_NAME}`}>
          {/* eslint-disable-next-line react/prop-types */}
          <Link to={baseUrl} onClick={() => history.push(baseUrl)} className="movie-nav__link">Overview</Link>
        </li>
        <li className={`movie-nav__item ${isCurrentUrl(detailsPathname) && ACTIVE_MENU_ITEM_CLASS_NAME}`}>
          {/* eslint-disable-next-line react/prop-types */}
          <Link to={detailsPathname} onClick={() => history.push(detailsPathname)} className="movie-nav__link">Details</Link>
        </li>
        <li className={`movie-nav__item ${isCurrentUrl(reviewsPathname) && ACTIVE_MENU_ITEM_CLASS_NAME}`}>
          {/* eslint-disable-next-line react/prop-types */}
          <Link to={reviewsPathname} onClick={() => history.push(reviewsPathname)} className="movie-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      <section className="movie-card movie-card--full">
        <MovieHeader name={name} releaseDate={releaseDate} genre={genre} background={background}/>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <MoviePoster className="movie-card__poster movie-card__poster--big" src={poster} alt={name}/>
            <div className="movie-card__desc">
              {renderNavigation()}
              <Switch>
                <Route path={baseUrl} exact>
                  <MovieOverview actors={actors} score={score} level={level} reviewsCount={reviews.length} directors={directors} description={description}/>
                </Route>
                <Route path={detailsPathname} exact>
                  <MovieDetails releaseDate={releaseDate} genre={genre} actors={actors} runTime={runTime} directors={directors}/>
                </Route>
                <Route path={reviewsPathname} exact>
                  <MovieReviews reviews={reviews}/>
                </Route>
                <Route>
                  <Redirect to={baseUrl}/>
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
