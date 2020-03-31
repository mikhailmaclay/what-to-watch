// Libraries
import * as React from 'react';
// Styles
import styles from './movie-reviews.styles';
// Constants and utils
import splitArray from '../../utils/arrays/split-array';
// Components
import Review from '../review/review';
//
import {Review as ReviewType} from '../../types';


const FIRST_ITEM_INDEX = 0;

interface Props {
  reviews: ReviewType[];
}

function MovieReviews(props: Props) {
  const {reviews} = props;

  const reviewsByColumns = splitArray(reviews);

  const renderReviews = (reviewsData) => (
    reviewsData.map(({id, rating, user, date, text}) => <Review key={id} rating={rating} userName={user.fullName} date={date} text={text}/>)
  );

  return (
    <div className="movie-card__reviews movie-card__row">
      {reviewsByColumns.length ?
        reviewsByColumns.map((column) => (
          <div key={column[FIRST_ITEM_INDEX].id} className="movie-card__reviews-col">
            {renderReviews(column)}
          </div>))
        :
        <span style={styles.message}>There is no reviews yet.</span>
      }
    </div>
  );
}

export default React.memo(MovieReviews);
