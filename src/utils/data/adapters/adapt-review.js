function adaptReview(review) {
  return {
    id: review.id,
    user: {id: review.user.id, fullName: review.user.name},
    date: review.date,
    rating: review.rating,
    text: review.comment
  };
}

export default adaptReview;
