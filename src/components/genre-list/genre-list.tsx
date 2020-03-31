// Libraries
import * as React from 'react';
// Styles
import styles from './genre-list.styles';
// Constants and utils
import {Config} from '../../constants/consts';
// Components
import Button from '../button/button';

const ACTIVE_MENU_ITEM_CLASS_NAME = `catalog__genres-item--active`;

interface Props {
  genres: string[];
  currentGenre: string;
  changeGenre: (genreName?: string) => void;
}

function GenreList(props: Props) {
  const {genres, currentGenre, changeGenre} = props;
  const hasCurrentGenre = Boolean(currentGenre);

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${!hasCurrentGenre ? ACTIVE_MENU_ITEM_CLASS_NAME : ``}`}>
        <Button onClick={hasCurrentGenre ? () => changeGenre() : null} className="catalog__genres-link" style={styles.button(!hasCurrentGenre)} disabled={!hasCurrentGenre}>All genres</Button>
      </li>
      {genres.slice(0, Config.GENRE_LIST_MAX_MOVIE_COUNT).map((name) => {
        const isCurrentGenre = currentGenre === name;

        return (
          <li key={name} className={`catalog__genres-item ${isCurrentGenre ? ACTIVE_MENU_ITEM_CLASS_NAME : ``}`}>
            <Button {...{href: !isCurrentGenre ? `#` : null}} onClick={!isCurrentGenre ? () => changeGenre(name) : null} className="catalog__genres-link" style={styles.button(isCurrentGenre)} disabled={isCurrentGenre}>{name}</Button>
          </li>
        );
      })}
    </ul>
  );
}

export default React.memo(GenreList);
