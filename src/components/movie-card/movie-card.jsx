// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-card.prop-types';
// Constants and utils
import {PathName} from '../../constants/consts';
import compose from '../../utils/composition/compose';
import createHOC from '../../utils/components/create-hoc';
// Components
import Link from '../link/link';
//
import history from '../../history';

const FIRST_IMAGE = 0;

function MovieCard({id, name, preview, images, /* withPreviewOnHover: */ renderPreview, onMouseEnter, onMouseLeave}) {
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

const MovieCardMemo = React.memo(MovieCard);
const MovieCardWrapped = compose(createHOC(`withPreviewOnHover`))(MovieCardMemo);

export default MovieCardWrapped;
export {MovieCard, MovieCardMemo};
