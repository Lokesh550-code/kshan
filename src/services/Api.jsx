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