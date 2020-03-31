// Libraries
import * as React from 'react';
// Containers
import GenreListContainer from '../../containers/genre-list/genre-list';
import MoviePromoContainer from '../../containers/movie-promo/movie-promo';
// Components
import MovieListWrapped from '../movie-list/movie-list';
import Footer from '../footer/footer';
//
import {Movie} from '../../types';

interface Props {
  movies: Movie[];
}

function MainPage(props: Props) {
  const {movies} = props;

  return (
    <>
      <MoviePromoContainer/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="visually-hidden">Catalog</h2>
          <GenreListContainer/>
          {movies.length ? <MovieListWrapped movies={movies}/> : `Sorry, there is no movies.`}
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default React.memo(MainPage);
