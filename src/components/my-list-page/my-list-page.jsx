// Libraries
import React from 'react';
// PropTypes
import propTypes from './my-list-page.prop-types';
// Components
import Footer from '../footer/footer';
import Header from '../header/header';
import {MovieList} from '../movie-list/movie-list';

function MyListPage({movies}) {
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

MyListPage.propTypes = propTypes;

export default MyListPage;
