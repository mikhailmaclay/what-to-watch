// Libraries
import React from 'react';
// PropTypes
import propTypes from './genre-list.prop-types';
// Constants and utils
import {PathName} from '../../consts';
// Components
import {Link} from 'react-router-dom';

const ACTIVE_MENU_ITEM_CLASS_NAME = `catalog__genres-item--active`;

function GenreList({genres}) {
  const {pathname, search} = location;

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${pathname === PathName.ROOT && ACTIVE_MENU_ITEM_CLASS_NAME}`}>
        <Link to={PathName.ROOT} className="catalog__genres-link">All genres</Link>
      </li>
      {genres.map(({name, url}) => {
        const href = `${PathName.MOVIE_FILTER}?genre=${url}`;

        return (
          <li key={url} className={`catalog__genres-item ${pathname + search === href && ACTIVE_MENU_ITEM_CLASS_NAME}`}>
            <Link to={href} className="catalog__genres-link">{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

GenreList.propTypes = propTypes;

export default GenreList;
