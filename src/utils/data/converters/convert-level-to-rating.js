function convertLevelToRating(milestones) {
  return (rating) => {

    for (let milestone of Object.keys(milestones).reverse()) {
      if (rating >= parseInt(milestone, 10)) {
        return milestones[milestone];
      }
    }

    return ``;
  };
}

export default convertLevelToRating;
