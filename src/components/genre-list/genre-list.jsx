// Libraries
import React from 'react';
import {withRouter} from 'react-router-dom';
// PropTypes
import propTypes from './genre-list.prop-types';
// Constants and utils
import {Config, PathName} from '../../consts';
import {getLabeledDisplayName, isCurrentUrl} from '../../utils';
// Components
import Link from '../link/link';

const ACTIVE_MENU_ITEM_CLASS_NAME = `catalog__genres-item--active`;

function GenreList({genres, /* withRouter: */ history}) {
  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${isCurrentUrl(PathName.ROOT) && ACTIVE_MENU_ITEM_CLASS_NAME}`}>
        <Link to={PathName.ROOT} onClick={() => history.push(PathName.ROOT)} className="catalog__genres-link">All genres</Link>
      </li>
      {genres.slice(0, Config.GENRE_LIST_MAX_MOVIE_COUNT).map(({name, url}) => {
        const href = `${PathName.MOVIE_FILTER}?genre=${url}`;

        return (
          <li key={url} className={`catalog__genres-item ${isCurrentUrl(href) && ACTIVE_MENU_ITEM_CLASS_NAME}`}>
            <Link to={href} onClick={() => history.push(href)} className="catalog__genres-link">{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

/*
  The component has been optimized by creating an additional Link component, which, unlike the Link component, out of the box
  react-router-dom is not a higher-order component withRouter. This does not allow it to be meaninglessly updated when
  following the links.
  Unfortunately, the parent component should be a withRouter HOC and pass to the Link component a callback function with
  communication to the push method of the history object.
 */

GenreList.propTypes = propTypes;

const GenreListMemo = React.memo(GenreList);
const GenreListWrapped = withRouter(GenreListMemo);

GenreListWrapped.displayName = getLabeledDisplayName(`withRouter`, GenreList);

export default GenreListWrapped;
export {GenreList, GenreListMemo};
