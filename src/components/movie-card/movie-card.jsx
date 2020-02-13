import React from 'react';
import PropTypes from 'prop-types';

const FIRST_IMAGE = 0;

function MovieCard({id, name, images, onMovieCardMouseOver: handleMovieCardMouseOver}) {
  const handleMouseOver = () => handleMovieCardMouseOver(id);
  const handleClick = () => window.location.assign(`/${id}`);

  return (
    <article className="small-movie-card catalog__movie-card" onMouseOver={handleMouseOver} onClick={handleClick}>
      <div className="small-movie-card__image">
        <img src={images[FIRST_IMAGE]} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <span className="small-movie-card__link">{name}</span>
      </h3>
    </article>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onMovieCardMouseOver: PropTypes.func.isRequired
};

export default MovieCard;
