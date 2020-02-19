// Libraries
import React from 'react';
// PropTypes
import propTypes from './main.prop-types';
// Components
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';
import Button from '../button/button';
import GenreList from '../genre-list/genre-list';
import MoviePromo from '../movie-promo/movie-promo';
// HOCs
import withStateUpdateOnHover from '../../hocs/with-state-update-on-hover';

const MovieListWithStateUpdateOnHover = withStateUpdateOnHover(MovieList);

function Main({specialMovie, genres, movies, onMovieCardTitleClick}) {
  return (
    <>
      <MoviePromo specialMovie={specialMovie} onMovieCardTitleClick={onMovieCardTitleClick}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="visually-hidden">Catalog</h2>
          <GenreList genres={genres}/>
          {movies.length ?
            <>
              <MovieListWithStateUpdateOnHover movies={movies}/>
              <div className="catalog__more">
                <Button className="catalog__button">Show more</Button>
              </div>
            </>
            : `Sorry, there is no matching results.`
          }
        </section>
        <Footer/>
      </div>
    </>
  );
}

Main.propTypes = propTypes;

export default Main;
