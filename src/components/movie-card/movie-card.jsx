import React from 'react';
import PropTypes from 'prop-types';

function MovieCard({id, name, poster, onMovieCardMouseOver: handleMovieCardMouseOver}) {
  const handleMouseOver = () => handleMovieCardMouseOver(id);

  return (
    <article className="small-movie-card catalog__movie-card" onMouseOver={handleMouseOver}>
      <div className="small-movie-card__image">
        <img src={poster} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onMovieCardMouseOver: PropTypes.func.isRequired
};

export default MovieCard;
