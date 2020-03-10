// Libraries
import React from 'react';
// PropTypes
import propTypes from './main.prop-types';
// Components
import MovieListWrapped from '../movie-list/movie-list';
import Footer from '../footer/footer';
import GenreList from '../genre-list/genre-list';
import MoviePromo from '../movie-promo/movie-promo';

function Main({specialMovie, genres, movies, currentGenre, onGenreChange}) {
  return (
    <>
      <MoviePromo specialMovie={specialMovie}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="visually-hidden">Catalog</h2>
          <GenreList genres={genres} currentGenre={currentGenre} onGenreChange={onGenreChange}/>
          {movies.length ?
            <MovieListWrapped movies={movies}/>
            : `Sorry, there is no matching results.`
          }
        </section>
        <Footer/>
      </div>
    </>
  );
}

Main.propTypes = propTypes;

export default React.memo(Main);
