export const Config = {
  SPECIAL_MOVIE_ID: 1,
  MOVIE_CARDS_COUNT_BY_LOAD: 8,
  MOVIE_SCORE_PRECISION: 3,
  MOVIE_LEVEL_MAP: {
    10: `Awesome`,
    7: `Very good`,
    5: `Good`,
    3: `Normal`,
    0: `Bad`
  },
  MOVIE_DEFAULT_SCORE: 0,
  MOVIE_OVERVIEW_ACTORS_COUNT: 4,
  SIMILAR_MOVIES_COUNT: 4
};

export const PathName = {
  ROOT: `/`,
  MOVIE_FILTER: `/films`,
  MOVIE_PAGE: `/films/`,
  ADD_REVIEW: `/add-review`
};

export const FilterName = {
  Movie: {
    EXCEPT_ID: `ID`,
    GENRE: `GENRE`
  },
  Team: {
    ROLE: `ROLE`
  }
};

