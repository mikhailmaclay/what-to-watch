function selectMovieByID(id) {
  return (movies) => movies.find((movie) => movie.id === id);
}

export default selectMovieByID;
