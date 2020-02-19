// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-card.prop-types';
// Constants and utils
import {PathName} from '../../consts';
// Components
import {Link} from 'react-router-dom';

const FIRST_IMAGE = 0;

function MovieCard({id, name, images, onMovieCardMouseOver}) {
  const handleMouseOver = () => onMovieCardMouseOver(id);

  return (
    <Link className="small-movie-card catalog__movie-card" to={PathName.MOVIE_PAGE + id} onMouseOver={handleMouseOver}>
      <div className="small-movie-card__image">
        <img src={images[FIRST_IMAGE]} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <span className="small-movie-card__link">{name}</span>
      </h3>
    </Link>
  );
}

MovieCard.propTypes = propTypes;

export default MovieCard;
