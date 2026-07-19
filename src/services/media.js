import tmdb from "./clients/tmdb";
import { request } from "./helpers/request";
import { mergeMedia } from "./helpers/mergerMedia";

export const getTalk = async () => {
  const [movie, tv] = await Promise.all([
    request(tmdb, `/movie/popular`),
    request(tmdb, `/tv/popular`),
  ]);
  return mergeMedia(movie, tv)
};

export const getTrending = async (period) => {
  const data = await request(tmdb, `${period}`);
  return data.results;
};

export const getTop = async () => {
  const [movie, tv] = await Promise.all([
    request(tmdb, `/movie/top_rated`),
    request(tmdb, `/tv/top_rated`),
  ]);
  return mergeMedia(movie, tv)
};

export const getCritiicallyAcclaimed = async () => {
    const [movie, tv] = await Promise.all([
      request(tmdb, 
        `/discover/movie?include_adult=false&vote_average.gte=7.5&vote_count.gte=5000&primary_release_date.gte=1990-01-01&sort_by=vote_average.desc`,
      ),
      request(tmdb, 
        `/discover/tv?include_adult=false&vote_average.gte=7.5&vote_count.gte=5000&first_air_date.gte=1990-01-01&sort_by=vote_average.desc`,
      ),
    ]);
  return mergeMedia(movie, tv)
};

export const getTrendingMedia = async (period, periodTv, page) => {
    const [movie, tv] = await Promise.all([request( tmdb ,period, { params: {page: page} } ), request(tmdb ,periodTv, { params: {page: page} } )]);
  return mergeMedia(movie, tv).slice(0, 20);
};