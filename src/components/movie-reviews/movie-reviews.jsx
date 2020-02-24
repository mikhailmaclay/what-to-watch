// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-reviews.prop-types';
// Components
import Review from '../review/review';
import {getUserById, splitArray} from '../../utils';

const FIRST_ITEM_INDEX = 0;

function MovieReviews({reviews, users}) {
  const reviewsByColumns = splitArray(reviews);

  // eslint-disable-next-line no-shadow
  const renderReviews = (reviews) => (
    reviews.map(({rating, user, date, text, id}) => {
      const {fullName: userName} = getUserById(users, user);

      return <Review key={id} rating={rating} userName={userName} date={date} text={text}/>;
    })
  );

  return (
    <div className="movie-card__reviews movie-card__row">
      {reviewsByColumns.length ?
        reviewsByColumns.map((column) => (
          <div key={column[FIRST_ITEM_INDEX].id} className="movie-card__reviews-col">
            {renderReviews(column)}
          </div>))
        :
        <span style={{color: `#252525`}}>There is no reviews yet</span>
      }
    </div>
  );
}

MovieReviews.propTypes = propTypes;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
