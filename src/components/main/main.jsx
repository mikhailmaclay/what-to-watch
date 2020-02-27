// Libraries
import React from 'react';
// PropTypes
import propTypes from './main.prop-types';
// Components
import MovieListWrapped from '../movie-list/movie-list';
import Footer from '../footer/footer';
import GenreListWrapped from '../genre-list/genre-list';
import MoviePromo from '../movie-promo/movie-promo';

function Main({specialMovie, genres, movies}) {
  return (
    <>
      <MoviePromo specialMovie={specialMovie}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="visually-hidden">Catalog</h2>
          <GenreListWrapped genres={genres}/>
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
