// Libraries
import React from 'react';
// PropTypes
import propTypes from './review.prop-types';
// Constants and utils
import {formatScore, getDate} from '../../utils';

function Review({userName, date, rating, text}) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>
        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime={date}>{getDate(date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{formatScore(rating)}</div>
    </div>
  );
}

Review.propTypes = propTypes;

export default Review;
