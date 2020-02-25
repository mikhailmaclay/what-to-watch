// Libraries
import React from 'react';
// PropTypes
import propTypes from './main.prop-types';
// Components
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';
import GenreList from '../genre-list/genre-list';
import MoviePromo from '../movie-promo/movie-promo';

function Main({specialMovie, genres, movies, onMovieCardTitleClick}) {
  return (
    <>
      <MoviePromo specialMovie={specialMovie} onMovieCardTitleClick={onMovieCardTitleClick}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="visually-hidden">Catalog</h2>
          <GenreList genres={genres}/>
          {movies.length ?
            <MovieList movies={movies}/>
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
