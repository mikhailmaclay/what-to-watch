// Libraries
import * as React from 'react';
// Components
import Footer from '../footer/footer';
import Header from '../header/header';
import {MovieList} from '../movie-list/movie-list';
//
import {Movie} from '../../types';

interface Props {
  movies: Movie[];
}

function MyListPage(props: Props) {
  const {movies} = props;

  return (
    <div className="user-page">
      <Header className="page-header user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">List</h2>

        {movies.length ? <MovieList movies={movies}/> : `You have not added movies to your list yet.`}
      </section>

      <Footer/>
    </div>
  );
}

export default MyListPage;
