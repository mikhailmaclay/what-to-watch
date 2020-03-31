// Libraries
import * as React from 'react';
// Constants and utils
import {Config} from '../../constants/consts';
import padEndWithZero from '../../utils/strings/pad-end-with-zero';
import getDate from '../../utils/time/get-date';

interface Props {
  userName: string;
  date: string;
  rating: number;
  text: string;
}

function Review(props: Props) {
  const {userName, date, rating, text} = props;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>
        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime={date}>{getDate(Config.REVIEW_DATE_FORMAT)(date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{padEndWithZero(rating)}</div>
    </div>
  );
}

export default React.memo(Review);
