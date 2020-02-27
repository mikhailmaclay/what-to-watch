// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-reviews.prop-types';
import defaultProps from './movie-reviews.default-props';
// Styles
import styles from './movie-reviews.styles';
// Components
import Review from '../review/review';
import {splitArray} from '../../utils';

const FIRST_ITEM_INDEX = 0;

function MovieReviews({reviews}) {
  const reviewsByColumns = splitArray(reviews);

  // eslint-disable-next-line no-shadow
  const renderReviews = (reviews) => (
    reviews.map(({id, rating, user, date, text}) => <Review key={id} rating={rating} userName={user.fullName} date={date} text={text}/>)
  );

  return (
    <div className="movie-card__reviews movie-card__row">
      {reviewsByColumns.length ?
        reviewsByColumns.map((column) => (
          <div key={column[FIRST_ITEM_INDEX].id} className="movie-card__reviews-col">
            {renderReviews(column)}
          </div>))
        :
        <span style={styles.message}>There is no reviews yet</span>
      }
    </div>
  );
}

MovieReviews.propTypes = propTypes;

MovieReviews.defaultProps = defaultProps;

export default React.memo(MovieReviews);
