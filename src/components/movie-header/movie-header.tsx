// Libraries
import * as React from 'react';
// Constants and utils
import {Config, PathName} from '../../constants/consts';
import getDate from '../../utils/time/get-date';
// Components
import Button from '../button/button';
import Header from '../header/header';
import Icon from '../icon/icon';
import Link from '../link/link';

interface Props {
  id: number;
  name: string;
  genre: string;
  backgrounds: string[];
  releaseDate: string;
  isInMyList: boolean;
  isAuthorized: boolean;
  onChangeMovieStatus: (movieID: number, status: number) => void;
}

function MovieHeader(props: Props) {
  const {id, name, backgrounds, genre, releaseDate, isInMyList, isAuthorized, onChangeMovieStatus} = props;
  const [backgroundColor, backgroundImage] = backgrounds;

  const handleMyListButtonClick = () => {
    onChangeMovieStatus(id, Number(!isInMyList));
  };

  return (
    <div className="movie-card__hero">
      <div className="movie-card__bg" style={{backgroundColor}}>
        <img src={backgroundImage} alt={name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header className="page-header movie-card__head"/>
      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{getDate(Config.MOVIE_PROMO_RELEASE_DATE_FORMAT)(releaseDate)}</span>
          </p>
          <div className="movie-card__buttons">
            <Link to={PathName.MOVIE_PAGE + id + `/player`} className="btn btn--play movie-card__button">
              <Icon name="play-s" width="19" height="19"/>
              <span>Play</span>
            </Link>
            <Button className="btn btn--list movie-card__button" onClick={handleMyListButtonClick}>
              <Icon name={isInMyList ? `in-list` : `add`} width="19" height="20"/>
              <span>My list</span>
            </Button>
            {isAuthorized && <Link to={PathName.MOVIE_PAGE + id + `/review`} className="btn movie-card__button">Add review</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MovieHeader);
