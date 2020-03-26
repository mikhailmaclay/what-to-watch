function selectGenres(movies) {
  return movies.reduce((uniqueGenres, {genre: genreName}) => {
    const isUnique = !uniqueGenres.includes(genreName);

    return isUnique ? [genreName, ...uniqueGenres] : uniqueGenres;
  }, []);
}

export default selectGenres;
