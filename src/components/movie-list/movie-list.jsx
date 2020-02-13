import React from 'react';
import PropTypes from 'prop-types';

import {bind} from '../../utils';

import MovieCard from '../movie-card/movie-card';

class MovieList extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      activeMovie: null
    };

    bind(this, this.handleMovieCardMouseOver);
  }

  handleMovieCardMouseOver(movieId) {
    this.setState({activeMovie: movieId});
  }

  render() {
    const {movies} = this.props;

    const renderMovieCards = () => (
      movies.map((movie) => <MovieCard key={movie.id} {...movie} onMovieCardMouseOver={this.handleMovieCardMouseOver}/>)
    );

    return (
      <div className="catalog__movie-list">
        {renderMovieCards()}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired
};

export default MovieList;
