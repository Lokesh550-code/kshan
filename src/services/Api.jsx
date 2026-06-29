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
    const res = await api.get("/movie/popular");
    return res.data.results;
  } catch (err) {
    console.error(err.message);
  }
};

export const getTrending = async (period) => {
  try {
    const res = await api.get(`/trending/movie/${period}`);
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

export const getUpcomingTv = async () => {
  try {
    const res = await api.get(`/movie/top_rated`);
    return res.data.results;
  } catch (err) {
    console.error(err.message);
  }
};

export const getTopTv = async () => {
  try {
    const res = await api.get("/tv/top_rated");
    return res.data.results;
  } catch (err) {
    console.error(err.message);
  }
};

export const getCritiicallyAcclaimed = async () => {
  try {
    const res = await api.get(
      `/discover/movie?include_adult=false&vote_average.gte=7.5&vote_count.gte=5000&primary_release_date.gte=1990-01-01&sort_by=vote_average.desc`,
    );
    return res.data.results;
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
