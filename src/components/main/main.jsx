// Libraries
import React from 'react';
// PropTypes
import propTypes from './main.prop-types';
// Containers
import GenreListContainer from '../../containers/genre-list/genre-list';
import MoviePromoContainer from '../../containers/movie-promo/movie-promo';
// Components
import MovieListWrapped from '../movie-list/movie-list';
import Footer from '../footer/footer';

function Main({movies}) {
  const renderMovies = () => {
    // eslint-disable-next-line react/prop-types
    if (!movies.length) {
      return `Sorry, there is no movies.`;
    }

    return <MovieListWrapped movies={movies}/>;
  };

  return (
    <>
      <MoviePromoContainer/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="visually-hidden">Catalog</h2>
          <GenreListContainer/>
          {renderMovies()}
        </section>
        <Footer/>
      </div>
    </>
  );
}

Main.propTypes = propTypes;

export default React.memo(Main);
