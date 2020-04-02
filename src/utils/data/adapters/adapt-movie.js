function adaptMovie(movieDataItem) {
  return ({
    id: movieDataItem.id,
    name: movieDataItem.name,
    genre: movieDataItem.genre,
    releaseDate: String(movieDataItem.released),
    description: [movieDataItem.description],
    runTime: movieDataItem[`run_time`],
    team: [
      {fullName: movieDataItem.director, role: `Director`},
      ...movieDataItem.starring.map((teamMember) => ({fullName: teamMember, role: `Actor`}))
    ],
    poster: movieDataItem[`poster_image`],
    images: [movieDataItem[`preview_image`]],
    backgrounds: [movieDataItem[`background_color`], movieDataItem[`background_image`]],
    rating: movieDataItem.rating,
    scoresCount: movieDataItem[`scores_count`],
    preview: movieDataItem[`preview_video_link`],
    video: movieDataItem[`video_link`],
    isInMyList: movieDataItem[`is_favorite`],
    reviews: null
  });
}

export default adaptMovie;
