// Libraries
import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
// PropTypes
import propTypes from './movie-card.prop-types';
// Constants and utils
import {PathName} from '../../consts';
import {getLabeledDisplayName} from '../../utils';
// HOCs
import withPreviewOnHover from '../../hocs/with-preview-on-hover';

const FIRST_IMAGE = 0;

function MovieCard({id, name, preview, images, history, renderPreview, onMouseEnter, onMouseLeave}) {
  // history is from withRouter HOC; renderPreview, onMouseEnter, onMouseLeave are from withPreviewOnHover HOC

  const handleClick = () => !preview && history.push(PathName.MOVIE_PAGE + id);

  return (
    <article className="small-movie-card catalog__movie-card" onClick={handleClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {!!renderPreview && renderPreview(preview, images[FIRST_IMAGE])}
      <Link to={PathName.MOVIE_PAGE + id} className="small-movie-card__image">
        <img src={images[FIRST_IMAGE]} alt={name} width="280" height="175"/>
      </Link>
      <h3 className="small-movie-card__title">
        <span className="small-movie-card__link">{name}</span>
      </h3>
    </article>
  );
}

MovieCard.propTypes = propTypes;

const MovieCardWithRouter = withRouter(MovieCard);

MovieCardWithRouter.displayName = getLabeledDisplayName(`WithRouter`, MovieCard);

const MovieCardWithPreviewOnHover = withPreviewOnHover(MovieCardWithRouter);

export default MovieCardWithPreviewOnHover;
export {MovieCard};
