// Libraries
import React from 'react';
// PropTypes
import propTypes from './review.prop-types';
// Constants and utils
import {Config} from '../../consts';
import padEndWithZero from '../../utils/strings/pad-end-with-zero';
import getDate from '../../utils/time/get-date';

function Review({userName, date, rating, text}) {
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

Review.propTypes = propTypes;

export default React.memo(Review);
