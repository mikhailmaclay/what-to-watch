// Libraries
import * as React from 'react';
// Constants and utils
import {PathName} from '../../constants/consts';
import compose from '../../utils/composition/compose';
import createHOC from '../../utils/components/create-hoc';
// Components
import Link from '../link/link';
//
import history from '../../history';

const FIRST_IMAGE = 0;

interface Props {
  id: number;
  name: string;
  preview: string;
  images: string[];
  renderPreview?: (src: string) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function MovieCard(props: Props) {
  const {id, name, preview, images, renderPreview, onMouseEnter, onMouseLeave} = props;

  const handleClick = () => !preview && history.push(PathName.MOVIE_PAGE + id);

  return (
    <article className="small-movie-card catalog__movie-card" onClick={handleClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {!!renderPreview && renderPreview(preview)}
      <Link to={PathName.MOVIE_PAGE + id} className="small-movie-card__image">
        <img src={images[FIRST_IMAGE]} alt={name} width="280" height="175"/>
      </Link>
      <h3 className="small-movie-card__title">
        <span className="small-movie-card__link">{name}</span>
      </h3>
    </article>
  );
}

const MovieCardMemo = React.memo(MovieCard);
const MovieCardWrapped = compose(createHOC(`withPreviewOnHover`))(MovieCardMemo);

export default MovieCardWrapped;
export {MovieCard, MovieCardMemo};
