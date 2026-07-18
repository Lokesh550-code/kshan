export const mergeMedia = (movie, tv) => {
  return [
    ...movie.results.map((item) => ({ ...item, media_type: `Movie` })),
    ...tv.results.map((item) => ({ ...item, media_type: `TV` })),
  ].sort((a, b) => b.popularity - a.popularity);
};