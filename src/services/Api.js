import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export const getTalk = async () => {
  try {
    const [movie, tv] = await Promise.all([
      api.get(`/movie/popular`),
      api.get(`/tv/popular`),
    ]);

    const talk = [
      ...movie.data.results.map((item) => ({ ...item, media_type: "Movie" })),
      ...tv.data.results.map((item) => ({ ...item, media_type: "TV" })),
    ];
    talk.sort((a, b) => b.popularity - a.popularity);
    return talk;
  } catch (err) {
    console.error(err.message);
  }
};

export const getTrending = async (period) => {
  try {
    const res = await api.get(`${period}`);
    return res.data.results;
  } catch (err) {
    console.error(err.message);
  }
};

export const getUpcoming = async () => {
  try {
    const res = await api.get(`/movie/upcoming`);
    return res.data.results;
  } catch (err) {
    console.error(err.message);
  }
};

export const getTop = async () => {
  try {
    const [movie, tv] = await Promise.all([
      api.get(`/movie/top_rated`),
      api.get(`/tv/top_rated`),
    ]);

    const res = [
      ...movie.data.results.map((item) => ({ ...item, media_type: "Movie" })),
      ...tv.data.results.map((item) => ({ ...item, media_type: "TV" })),
    ];
    res.sort((a, b) => b.popularity - a.popularity);
    return res;
  } catch (err) {
    console.error(err.message);
  }
};

export const getCritiicallyAcclaimed = async () => {
  try {
    const [movie, tv] = await Promise.all([
      api.get(
        `/discover/movie?include_adult=false&vote_average.gte=7.5&vote_count.gte=5000&primary_release_date.gte=1990-01-01&sort_by=vote_average.desc`,
      ),
      api.get(
        `/discover/tv?include_adult=false&vote_average.gte=7.5&vote_count.gte=5000&first_air_date.gte=1990-01-01&sort_by=vote_average.desc`,
      ),
    ]);

    const crit = [
      ...movie.data.results.map((item) => ({ ...item, media_type: "Movie" })),
      ...tv.data.results.map((item) => ({ ...item, media_type: "TV" })),
    ];
    crit.sort((a, b) => b.popularity - a.popularity);
    return crit;
    // return res.data.results;
  } catch (err) {
    console.error(err.message);
  }
};

export const getAnime = async () => {
  try {
    const res = await axios.get(`https://api.jikan.moe/v4/top/anime`);
    return res.data.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const getTrendingMedia = async (period, periodTv) => {
  try {
    const [movie, tv] = await Promise.all([api.get(period), api.get(periodTv)]);
    const res = [
      ...movie.data.results.map((item) => ({ ...item, media_type: "Movie" })),
      ...tv.data.results.map((item) => ({ ...item, media_type: "Tv" })),
    ];

    res.sort((a, b) => b.popularity - a.popularity);

    if (res.length > 20) {
      return res.slice(0, 20);
    }
    return res;
  } catch (err) {
    console.error(err.message);
  }
};
